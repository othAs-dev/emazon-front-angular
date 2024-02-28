import { inject, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddProductToCart, DeleteItem, UpdateQuantity } from '@app/marketplace/cart/cart.action';
import { map, Observable } from 'rxjs';
import { CartState } from '@app/marketplace/cart/cart.state';
import { Product } from '@app/shared/models/product';
import { CartProduct } from '@app/marketplace/cart/cart.constants';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private _store: Store = inject(Store);
    private productTotalAmount$: Observable<number> = this._store.select(
        CartState.getCartProductTotalAmount
    );
    private allProductRecap$: Observable<CartProduct[]> = this._store.select(
        CartState.getAllCartProduct
    );

    addItem(item: CartProduct): void {
        this._store.dispatch(new AddProductToCart(item));
    }

    deleteItem(item: CartProduct): void {
        this._store.dispatch(new DeleteItem(item));
    }

    getProductTotalAmount(): Observable<number> {
        return this.productTotalAmount$;
    }

    getAllProducts(): Observable<CartProduct[]> {
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

    updateQuantity(cartProduct: CartProduct, newSelected: string) {
        this._store.dispatch(new UpdateQuantity(cartProduct, newSelected))
    }
}
