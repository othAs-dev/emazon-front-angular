import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItem } from '@app/marketplace/home/home.constants';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';

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
})
export class ProductCardComponent {
    private _snackBar: MatSnackBar = inject(MatSnackBar);
    @Input({ required: false }) cardWdithPhoneViewPort: string = 'w-5/12';
    @Input() products!: ProductItem[];

    protected trackByProductsData = (id: number, item: ProductItem) => item.id;

    protected addToCart() {
        this._snackBar.open('Produit ajouté au panier', 'Fermer', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: 'success-snackbar',
            duration: 3000,
        });
    }
}
