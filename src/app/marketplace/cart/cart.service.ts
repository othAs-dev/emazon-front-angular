import { inject, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddItem, DeleteItem } from '@app/marketplace/cart/cart.action';
import { ProductRecap } from '@app/marketplace/cart/cart.constants';
import { map, Observable } from 'rxjs';
import { CartState } from '@app/marketplace/cart/cart.state';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _store: Store = inject(Store);
  private productTotalAmount$: Observable<number> = this._store.select(CartState.getCartProductTotalAmount);
  private allProductRecap$: Observable<ProductRecap[]> = this._store.select(CartState.getProductRecap);

  addItem(item: ProductRecap): void {
    this._store.dispatch(new AddItem(item));
  }

  deleteItem(item: ProductRecap): void {
    this._store.dispatch(new DeleteItem(item));
  }

  getProductTotalAmount(): Observable<number> {
    return this.productTotalAmount$;
  }

  getAllProducts(): Observable<ProductRecap[]> {
    return this.allProductRecap$;
  }

  getTotalWithoutTaxes(): Observable<number> {
    return this.productTotalAmount$
      .pipe(
        map(val => {

          const vat = (val / (1 + 0.2)) * 0.2;
          const serviceFees = (val / (1 + 0.05)) * 0.05;
          return val - vat - serviceFees;
        })
      );
  }
}
