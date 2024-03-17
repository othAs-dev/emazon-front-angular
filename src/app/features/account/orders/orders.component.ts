import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngxs/store';
import { GetAllOrder } from '@feat/account/orders/orders.action';
import { Observable, tap } from 'rxjs';
import { OrderState } from '@feat/account/orders/orders.state';
import { ErrorComponent } from '@app/shared/components/error/error.component';

export interface Order {
    date: string;
    id: string | number;
    quantity: number;
    totalAmount: string;
}

@Component({
    selector: 'app-orders',
    standalone: true,
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        NgForOf,
        ErrorComponent
    ],
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class OrdersComponent implements OnInit{
    displayedColumns: string[] = ['id', 'date', 'quantity', 'totalAmount'];
    private readonly _store = inject(Store);
    dataSource: Observable<Order[]> = this._store.select(OrderState.getAllOrders).pipe(tap(console.log));

    ngOnInit(): void {
        this._store.dispatch(new GetAllOrder())
    }
}
