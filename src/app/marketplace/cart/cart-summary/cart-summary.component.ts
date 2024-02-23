import { Component, inject, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '@app/marketplace/cart/cart.service';
import { Products } from '@app/shared/models/product';

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
    @Input({ required: true }) productRecap: Products;
    protected cartService: CartService = inject(CartService);
}
