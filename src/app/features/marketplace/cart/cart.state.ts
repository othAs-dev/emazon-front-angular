import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import {
    AddProductToCart,
    ClearCart,
    DeleteItem,
    UpdateQuantity
} from '@feat/marketplace/cart/cart.action';
import { CartOrder, CartProduct } from '@feat/marketplace/cart/cart.constants';
import { patch, updateItem } from '@ngxs/store/operators';

export interface CartModel {
    cartProducts: CartProduct[];
}

@State<CartModel>({
    name: 'cart',
    defaults: { cartProducts: [] }
})
@Injectable()
export class CartState {
    @Selector()
    static getCartProductTotalAmount(state: CartModel): number {
        return (
            state && state.cartProducts.reduce((acc, curr) => acc +
                this.toNumber(curr.price) * curr.quantity , 0)
        );
    }

    @Selector()
    static getAllCartProducts(state: CartModel): CartProduct[] {
        return state && state.cartProducts;
    }

    @Selector()
    static getCartOrder(state: CartModel): CartOrder {
        return state.cartProducts.reduce((acc, curr) => {
            return {
                productUidToQuantity: {
                    ...acc.productUidToQuantity,
                    [curr.uid!]: curr.quantity
                }
            };
        }, {} as CartOrder);
    }


    @Selector()
    static itemsInCart(state: CartModel): number {
        return state && state.cartProducts.reduce((acc, curr) => acc + curr.quantity, 0);
    }

    @Selector()
    static getCartTotalPlusVAT(state: CartModel): number {
        const EmazonFees = 0.05;
        const VATFrance = 0.2;
        const total = state.cartProducts.reduce(
            (acc, curr) => acc + this.toNumber(curr.price) * curr.quantity,
            0
        );
        return state && total + total * EmazonFees + total * VATFrance;
    }

    @Action(AddProductToCart)
    addProductToCart(ctx: StateContext<CartModel>, action: AddProductToCart): void {
        const state = ctx.getState();
        let item = state.cartProducts.find(v => v.uid === action.item.uid);
        const isAlreadyInCart: boolean = item !== undefined;
        if (isAlreadyInCart) {
          ctx.dispatch(new UpdateQuantity(action.item, (item!.quantity +1).toString()))
            return;
        }
        ctx.setState({
            ...state,
            cartProducts: [...state.cartProducts, action.item]
        });
    }

    @Action(DeleteItem)
    deleteItem(ctx: StateContext<CartModel>, action: DeleteItem): void {
        const state = ctx.getState();
        const newProductList = state.cartProducts.filter(
            (item) => item.uid !== action.item.uid
        );
        ctx.patchState({
            cartProducts: newProductList
        });
    }

    @Action(UpdateQuantity)
    updateQuantity(ctx: StateContext<CartModel>, action: UpdateQuantity): void {
        const item: CartProduct = { ...action.item, quantity: +action.quantity };
        ctx.setState(
            patch<CartModel>({
                cartProducts: updateItem<CartProduct>(
                    value => value.uid === action.item.uid,
                    item
                )
            })
        )
    }

    @Action(ClearCart)
    clearCart(ctx: StateContext<CartModel>): void {
        const state = ctx.getState();
        const newProduct = state.cartProducts.filter(_ => false);
        ctx.setState(patch<CartModel>({
            cartProducts: newProduct
        }));
    }

    static toNumber(num?: string | undefined): number {
        if (!num)
            return 0;
        const isNumber = !isNaN(+num);
        return isNumber ? +num : 0;
    }
}
