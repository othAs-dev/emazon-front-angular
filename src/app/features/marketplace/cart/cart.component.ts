import { Component, inject } from '@angular/core';
import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
    benefitsData,
    benefitsModel,
    CartProduct,
    payementMethodData,
    payementMethodModel
} from './cart.constants';
import { MatCardModule } from '@angular/material/card';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from '@app/shared/components/product-card/product-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
    ProductCardCarouselComponent
} from '@app/shared/components/product-card-carousel/product-card-carousel.component';
import { Id } from '@app/shared/models/id';
import { SelectComponent } from '@app/shared/components/select/select.component';
import { CartItemComponent } from '@feat/marketplace/cart/cart-item/cart-item.component';
import { CartService } from '@app/service/cart.service';
import { CartSummaryComponent } from '@feat/marketplace/cart/cart-summary/cart-summary.component';
import { Observable } from 'rxjs';
import { ProductService } from '@app/service/product.service';
import { ErrorComponent } from '@app/shared/components/error/error.component';
import { Products } from '@app/shared/models/product';

@Component({
    selector: 'app-cart',
    imports: [
        CommonModule,
        FooterComponent,
        MatButtonModule,
        RouterLink,
        MatIconModule,
        MatCardModule,
        NgOptimizedImage,
        MatSnackBarModule,
        FormlyModule,
        ReactiveFormsModule,
        ProductCardComponent,
        MatFormFieldModule,
        MatSelectModule,
        NgFor,
        MatInputModule,
        FormsModule,
        ProductCardCarouselComponent,
        SelectComponent,
        CartItemComponent,
        CartSummaryComponent,
        ErrorComponent,
    ],
    templateUrl: './cart.component.html',
    standalone: true,
})
export default class CartComponent {
    private _productService: ProductService = inject(ProductService);
    private _cartService = inject(CartService);
    protected benefitsData: benefitsModel[] = benefitsData;
    protected payementMethodData: payementMethodModel[] = payementMethodData;
    protected cartProducts$: Observable<CartProduct[]> =
        this._cartService.getAllProducts();
    protected giftWrap: boolean = false;
    protected recommendationProducts$: Observable<Products> =
        this._productService.getProducts();
    protected form = new FormGroup({});
    protected model: any = {};
    protected fields: FormlyFieldConfig[] = [
        {
            key: 'promoCode',
            type: 'input',
            props: {
                placeholder: 'Écrivez le ici',
                type: 'text',
                required: true,
            },
        },
    ];

    protected submit() {
        if (this.form.valid) {
            alert(JSON.stringify(this.model));
        }
    }

    protected trackByBenefitsId = (index: Id, benefit: benefitsModel) =>
        benefit.id;
    protected trackByPayementMethodId = (
        index: Id,
        payementMethod: payementMethodModel
    ) => payementMethod.id;

    protected addGiftWrap() {
        this.giftWrap = true;
    }
}
