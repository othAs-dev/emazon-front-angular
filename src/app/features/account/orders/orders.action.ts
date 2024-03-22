import { CartProduct } from '@feat/marketplace/cart/cart.constants';

export class GetAllOrder {
    static readonly type = '[Order] Get All Orders'
}

export class PlaceOrder {
    static readonly type = '[Order] Place order';

    constructor(public cartProducts: CartProduct[]) {
    }
}
