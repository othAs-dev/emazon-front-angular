import { Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface PeriodicElement {
    date: string;
    id: number;
    quantity: number;
    totalAmount: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        id: 1423423543535,
        date: '25/02/2024',
        quantity: 3,
        totalAmount: '2500 €',
    },
    {
        id: 1423423543535,
        date: '25/02/2024',
        quantity: 4,
        totalAmount: '2500 €',
    },
    {
        id: 1423423543535,
        date: '25/02/2024',
        quantity: 6,
        totalAmount: '2500 €',
    },
    {
        id: 1423423543535,
        date: '25/02/2024',
        quantity: 9,
        totalAmount: '2500 €',
    },
    {
        id: 1423423543535,
        date: '25/02/2024',
        quantity: 10,
        totalAmount: '2500 €',
    },
    {
        id: 1423423543535,
        date: '25/02/2024',
        quantity: 2,
        totalAmount: '2500 €',
    },
    {
        id: 1423423543535,
        date: '25/02/2024',
        quantity: 4,
        totalAmount: '2500 €',
    },
    {
        id: 1423423543535,
        date: '25/02/2024',
        quantity: 1,
        totalAmount: '2500 €',
    },
    {
        id: 1423423543535,
        date: '25/02/2024',
        quantity: 8,
        totalAmount: '2500 €',
    },
    {
        id: 1423423543535,
        date: '25/02/2024',
        quantity: 2,
        totalAmount: '2500 €',
    },
];

@Component({
    selector: 'app-orders',
    standalone: true,
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        NgForOf,
    ],
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css'],
})
export default class OrdersComponent {
    displayedColumns: string[] = ['id', 'date', 'quantity', 'totalAmount'];
    dataSource = ELEMENT_DATA;
}
