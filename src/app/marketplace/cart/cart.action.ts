import { Product } from '@app/shared/models/product';

export class AddItem {
    static readonly type = '[Cart] add item';

    constructor(public item: Product) {}
}

export class DeleteItem {
    static readonly type = '[Cart] delete item';

    constructor(public item: Product) {}
}
