import { Component, inject, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CartProduct } from '@app/marketplace/cart/cart.constants';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SelectComponent } from '@app/shared/components/select/select.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '@app/service/cart.service';
import { SelectOption } from '@app/shared/models/selectOptions';

@Component({
    selector: 'app-cart-item',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        NgOptimizedImage,
        SelectComponent,
    ],
    templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
    @Input({ required: true }) cartProducts: CartProduct[];
    private _cartService: CartService = inject(CartService);
    private _snackBar: MatSnackBar = inject(MatSnackBar);

    onDefaultNumberOptionsSelected(newSelected: string, cartProduct: CartProduct) {
        console.log(newSelected, cartProduct);
        this._cartService.updateQuantity(cartProduct, newSelected)
    }

    getOptions(): SelectOption[] {
        return Array.from(Array(10).keys())
            .map((_, index) => ({
                id: index,
                option: (index+1).toString(),
                value: (index+1).toString()
            } as SelectOption))
    }

    protected deleteFn(currProd: CartProduct) {
        this._snackBar.open('Produit supprimé du panier');
        this._cartService.deleteItem(currProd);
    }
}
