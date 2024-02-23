import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { Id } from '@app/shared/models/id';
import { CartService } from '@app/marketplace/cart/cart.service';
import { Product, Products } from '@app/shared/models/product';

@Component({
    selector: 'app-product-card',
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        RouterLink,
    ],
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
    private _snackBar: MatSnackBar = inject(MatSnackBar);
    private _cartService: CartService = inject(CartService);
    @Input({ required: false }) cardWdithPhoneViewPort: string = 'w-5/12';
    @Input() products!: Products;

    protected trackByProductsData = (id: Id, item: Product) => item.id;

    protected addToCart(p: Product) {
        this._snackBar.open('Produit ajouté au panier');
        this._cartService.addItem({
            id: 1,
            description: '',
            delivery: '',
            imgSrc: p.imgSrc,
            packaging: '',
            price: p.price,
            name: p.name,
        });
    }
}
