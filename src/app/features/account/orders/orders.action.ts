import { Order } from '@feat/account/orders/orders.component';

export class GetAllOrder {
    static readonly type = '[Order] Get All Orders'
}

export class AddOrder {
    static readonly type = '[Order] Add Order'
    constructor(order: Order) {}
}
