import { Component, inject, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Products } from '@app/shared/models/product';
import { CartService } from '@app/service/cart.service';
import { Observable } from 'rxjs';
import { CartProduct } from '@app/marketplace/cart/cart.constants';

@Component({
    selector: 'app-cart-summary',
    standalone: true,
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
}
