import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItem } from '@app/marketplace/home/home.constants';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { Id } from '@app/shared/models/id';
import { CartService } from '@app/marketplace/cart/cart.service';

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
    @Input() products!: ProductItem[];

    protected trackByProductsData = (id: Id, item: ProductItem) => item.id;

    protected addToCart(p: ProductItem) {
        this._snackBar.open('Produit ajouté au panier');
        this._cartService.addItem({
            delivery: '',
            imageSrc: p.imageSrc,
            packaging: '',
            price: p.price.replace("€", "").replace(" ", "").trim(),
            productName: p.title
        })
    }
}
