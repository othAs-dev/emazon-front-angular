import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OrderTable } from '@feat/account/orders/orders.component';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Order, OrderAPI } from '@app/shared/models/server/order/order.model';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {

    private readonly _http: HttpClient = inject(HttpClient);

    getAllOrders(): Observable<OrderTable[]> {
        return this._http.get<OrderAPI[]>('http://localhost:8000/api/v1/order/list').pipe(
            map(orderAPI => {
                return orderAPI.map(order => {
                    return {
                        date: moment(order.purchaseDateTime, moment.ISO_8601).format('DD/MM/YYYY HH:mm'),
                        id: order.id,
                        quantity: order.orderDetails.reduce((acc, curr) => acc + curr.quantity, 0),
                        totalAmount: order.orderDetails.reduce((acc, curr) => +curr.price + acc, 0).toString()
                    };
                });
            })
        );
    }

    placeOrder(productIdsToQuantity: Record<string, number>): Observable<Order> {
        return this._http.post<Order>('http://localhost:8000/api/v1/order/add', {
            productIdsToQuantity
        } as Order);
    }
}
