import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
    benefitsData,
    benefitsModel,
    payementMethodData,
    payementMethodModel,
} from './cart.constants';
import { MatCardModule } from '@angular/material/card';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from '@app/shared/components/product-card/product-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductCardCarouselComponent } from '@app/shared/components/product-card-carousel/product-card-carousel.component';
import {
    PageContent,
    pageContent,
} from '@app/marketplace/product/product.constants';
import { Id } from '@app/shared/models/id';
import { SelectComponent } from '@app/shared/components/select/select.component';
import { CartItemComponent } from '@app/marketplace/cart/cart-item/cart-item.component';
import { CartService } from '@app/marketplace/cart/cart.service';
import { CartSummaryComponent } from '@app/marketplace/cart/cart-summary/cart-summary.component';
import { Observable } from 'rxjs';
import { Products } from '@app/shared/models/product';
import { ErrorComponent } from '@app/shared/components/error/error.component';

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
export default class CartComponent implements AfterViewInit {
    protected cartService = inject(CartService);

    protected benefitsData: benefitsModel[] = benefitsData;

    protected payementMethodData: payementMethodModel[] = payementMethodData;
    protected productRecap$: Observable<Products> =
        this.cartService.getAllProducts();
    protected giftWrap: boolean = false;
    protected readonly pageContent: PageContent = pageContent;
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

    protected products: Products = [
        {
            id: 7,
            name: 'Google Pixel 7a',
            imgSrc: 'assets/pixel-7a.webp',
            description:
                'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
            price: '1 259,00 €',
        },
    ];

    ngAfterViewInit(): void {
        this.cartService.getProductTotalAmount().subscribe(console.log);
    }

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
