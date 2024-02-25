import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AddItem, DeleteItem } from '@app/marketplace/cart/cart.action';
import { Products } from '@app/shared/models/product';

export interface CartModel {
    products: Products;
}

@State<CartModel>({
    name: 'cart',
    defaults: { products: [] }
})
@Injectable()
export class CartState {
    @Selector()
    static getCartProductTotalAmount(state: CartModel): number {
        return (
            state && state.products.reduce((acc, curr) => acc +
                this.toNumber(curr.price) +
                this.toNumber(curr.packaging) +
                this.toNumber(curr.delivery), 0)
        );
    }

    @Selector()
    static getProductRecap(state: CartModel): Products {
        return state && state.products;
    }

    @Selector()
    static getCartTotalPlusVAT(state: CartModel): number {
        const EmazonFees = 0.05;
        const VATFrance = 0.2;
        const total = state.products.reduce(
            (acc, curr) => acc + this.toNumber(curr.price),
            0
        );
        return state && total + total * EmazonFees + total * VATFrance;
    }

    @Selector()
    static getShippingTotal(state: CartModel): number {
        return state && state.products.reduce((acc, curr) => acc + this.toNumber(curr.delivery), 0);
    }

    @Selector()
    static getPackageTotal(state: CartModel): number {
        return state && state.products.reduce((acc, curr) => acc + this.toNumber(curr.packaging), 0);
    }

    @Action(AddItem)
    addItem(ctx: StateContext<CartModel>, action: AddItem): void {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            products: [...state.products, action.item]
        });
    }

    @Action(DeleteItem)
    deleteItem(ctx: StateContext<CartModel>, action: DeleteItem): void {
        const state = ctx.getState();
        const newProductList = state.products.filter(
            (item) => item !== action.item
        );
        ctx.patchState({
            products: newProductList
        });
    }

    static toNumber(num?: string | undefined): number {
        if (!num)
            return 0;
        const isNumber = !isNaN(+num);
        return isNumber ? +num : 0;
    }
}
