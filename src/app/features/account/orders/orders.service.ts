import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Order } from '@feat/account/orders/orders.component';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '@app/shared/store/auth/auth.action';
import { Products } from '@app/shared/models/product';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {

    private readonly _http: HttpClient = inject(HttpClient);

    getAllOrders(token: string): Observable<Order[]> {
        return this._http.get<OrderAPI[]>('http://localhost:8000/api/v1/order/list', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).pipe(
            map(orderAPI => {
                return orderAPI.map(order => ({
                    date: moment(order.purchaseDateTime, moment.ISO_8601).format("DD/MM/YYYY HH:mm"),
                    id: order.id,
                    quantity: order.products.length,
                    totalAmount: order.products.reduce((acc, curr) => +curr.price + acc, 0).toString()
                }));
            })
        );
    }
}

export interface OrderAPI {
    id: number,
    user: UserDetails,
    products: Products,
    purchaseDateTime: string
}
