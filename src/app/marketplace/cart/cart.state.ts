import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ProductRecap } from '@app/marketplace/cart/cart.constants';
import { Injectable } from '@angular/core';
import { AddItem, DeleteItem } from '@app/marketplace/cart/cart.action';

export interface CartModel {
  products: ProductRecap[];
}

@State<CartModel>({
  name: 'cart',
  defaults: { products: [] }
})
@Injectable()
export class CartState {


  @Selector()
  static getCartProductTotalAmount(state: CartModel): number {
    return state && state.products.reduce((acc, curr) => acc + +curr.price, 0);
  }

  @Selector()
  static getProductRecap(state: CartModel): ProductRecap[] {
    return state && state.products;
  }

  @Selector()
  static getCartTotalPlusVAT(state: CartModel): number {
    const EmazonFees = 0.05;
    const VATFrance = 0.2;
    const total = state.products.reduce((acc, curr) => acc + +curr.price, 0);
    return state && (total + (total * EmazonFees) + (total * VATFrance));
  }

  @Action(AddItem)
  addItem(ctx: StateContext<CartModel>, action: AddItem): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      products: [
        ...state.products,
        action.item
      ]
    });
  }

  @Action(DeleteItem)
  deleteItem(ctx: StateContext<CartModel>, action: DeleteItem): void {
    const state = ctx.getState();
    const newProductList = state.products.filter(item => item !== action.item);
    ctx.patchState({
      products: newProductList
    });
  }
}
