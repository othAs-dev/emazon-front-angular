import { Product } from '@app/shared/models/product';
import { CartProduct } from '@app/marketplace/cart/cart.constants';

export class AddProductToCart {
    static readonly type = '[Cart] add product to cart';

    constructor(public item: CartProduct) {}
}

export class DeleteItem {
    static readonly type = '[Cart] delete item';

    constructor(public item: CartProduct) {}
}

export class UpdateQuantity {
    static readonly type = '[Cart] update quantity';

    constructor(public item: CartProduct, public quantity: string) {
    }
}
