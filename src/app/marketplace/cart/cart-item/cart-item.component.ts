import { Component, inject, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { numberProductsOptions, ProductRecap } from '@app/marketplace/cart/cart.constants';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SelectComponent } from '@app/shared/components/select/select.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '@app/marketplace/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, NgOptimizedImage, SelectComponent],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input({ required: true }) productRecap: ProductRecap[];
  protected readonly numberProductsOptions = numberProductsOptions;
  protected numberProductsSelected: string = 'ONE';
  private _cartService: CartService = inject(CartService);
  private _snackBar: MatSnackBar = inject(MatSnackBar);


  onDefaultNumberOptionsSelected(newSelected: string) {
    this.numberProductsSelected = newSelected;
  }

  protected deleteFn(currProd: ProductRecap) {
    this._snackBar.open('Produit supprimé du panier');
    this._cartService.deleteItem(currProd);
  }
}
