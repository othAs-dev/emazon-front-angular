import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Order } from '@feat/account/orders/orders.component';
import { inject, Injectable } from '@angular/core';
import { EMPTY, mergeMap, Observable, tap } from 'rxjs';
import { AuthState } from '@app/shared/store/auth/auth.state';
import { AddOrder, GetAllOrder } from '@feat/account/orders/orders.action';
import { OrdersService } from '@feat/account/orders/orders.service';

export interface OrdersStateModel {
    orders: Order[]
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
    static getAllOrders(state: OrdersStateModel): Order[] {
        return state.orders
    }

    @Action(GetAllOrder)
    allOrders(ctx: StateContext<OrdersStateModel>): Observable<void> {
        const token: string | null = this._store.selectSnapshot(AuthState.token);
        if (token == null)
            return EMPTY
        return this._orderService.getAllOrders(token)
            .pipe(
                tap(orders => {
                    ctx.patchState({
                        orders
                    })
                }),
                mergeMap(_ => EMPTY)
            )

    }
    @Action(AddOrder)
    addOrder(ctx: StateContext<OrdersStateModel>, payload: AddOrder): Observable<void> {
        return EMPTY
    }
}
