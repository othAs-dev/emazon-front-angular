import { inject, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddItem, DeleteItem } from '@app/marketplace/cart/cart.action';
import { map, Observable } from 'rxjs';
import { CartState } from '@app/marketplace/cart/cart.state';
import { Product, Products } from '@app/shared/models/product';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    private _store: Store = inject(Store);
    private productTotalAmount$: Observable<number> = this._store.select(
        CartState.getCartProductTotalAmount
    );
    private allProductRecap$: Observable<Products> = this._store.select(
        CartState.getProductRecap
    );

    addItem(item: Product): void {
        this._store.dispatch(new AddItem(item));
    }

    deleteItem(item: Product): void {
        this._store.dispatch(new DeleteItem(item));
    }

    getProductTotalAmount(): Observable<number> {
        return this.productTotalAmount$;
    }

    getAllProducts(): Observable<Products> {
        return this.allProductRecap$;
    }

    getTotalWithoutTaxes(): Observable<number> {
        return this.productTotalAmount$.pipe(
            map((val) => {
                const vat = (val / (1 + 0.2)) * 0.2;
                const serviceFees = (val / (1 + 0.05)) * 0.05;
                return val - vat - serviceFees;
            })
        );
    }
}
