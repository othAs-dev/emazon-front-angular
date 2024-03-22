import { Component, inject, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '@app/service/cart.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartProduct } from '@feat/marketplace/cart/cart.constants';
import { Store } from '@ngxs/store';
import { PlaceOrder } from '@feat/account/orders/orders.action';

@Component({
    selector: 'app-cart-summary',
    standalone: true,
    styleUrls: ['./cart-summary.component.css'],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        NgOptimizedImage,
    ],
    templateUrl: './cart-summary.component.html',
})
export class CartSummaryComponent {
    @Input({ required: true }) cartProducts: CartProduct[];
    private cartService: CartService = inject(CartService);

    protected totalWithoutTaxes: Observable<number> = this.cartService.getTotalWithoutTaxes();
    protected totalProductAmount: Observable<number> = this.cartService.getProductTotalAmount();
    isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private readonly _store: Store = inject(Store);

    addOrder(cartProducts: CartProduct[]) {
        this.isLoading$.next(true);
        this._store.dispatch(new PlaceOrder(cartProducts))
            .subscribe(
                _ => this.isLoading$.next(false)
            );
    }
}
