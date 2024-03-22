import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { OrderTable } from '@feat/account/orders/orders.component';
import { inject, Injectable } from '@angular/core';
import { EMPTY, mergeMap, Observable, tap, timer } from 'rxjs';
import { GetAllOrder, PlaceOrder } from '@feat/account/orders/orders.action';
import { OrdersService } from '@feat/account/orders/orders.service';
import { ClearCart } from '@feat/marketplace/cart/cart.action';
import { Navigate } from '@ngxs/router-plugin';

export interface OrdersStateModel {
    orders: OrderTable[];
}

@State<OrdersStateModel>({
    name: "order",
    defaults: {
        orders : []
    }
})
@Injectable()
export class OrderState {
    private readonly _store: Store = inject(Store);
    private readonly _orderService: OrdersService = inject(OrdersService);


    @Selector()
    static getAllOrders(state: OrdersStateModel): OrderTable[] {
        return state.orders
    }

    @Action(GetAllOrder)
    allOrders(ctx: StateContext<OrdersStateModel>): Observable<void> {
        return this._orderService.getAllOrders()
            .pipe(
                tap(orders => {
                    ctx.patchState({
                        orders
                    })
                }),
                mergeMap(_ => EMPTY)
            )

    }

    @Action(PlaceOrder)
    placeOrder(ctx: StateContext<OrdersStateModel>, action: PlaceOrder): Observable<void> {
        let productToQuantity: Record<string, number> = action.cartProducts.reduce((acc, curr) => {
            if (!this.isNotUndefined(curr.uid))
                return acc;
            acc[curr.uid] = curr.quantity;
            return acc;
        }, {} as Record<string, number>);

        return timer(5000)
            .pipe(mergeMap(_ => {
                return this.orderAndRedirect(productToQuantity);
            }));

    }

    isNotUndefined<T>(v: T | undefined): v is T {
        return v !== undefined;
    }

    private orderAndRedirect(productToQuantity: Record<string, number>): Observable<void> {
        return this._orderService.placeOrder(productToQuantity)
            .pipe(
                tap(_ => {
                    this._store.dispatch(new ClearCart());
                    this._store.dispatch(new GetAllOrder());
                    this._store.dispatch(new Navigate(['/marketplace/thanks']));
                }),
                mergeMap(_ => EMPTY)
            );
    }
}
