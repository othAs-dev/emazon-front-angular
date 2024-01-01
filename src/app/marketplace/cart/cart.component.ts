import { Component, inject } from '@angular/core';
import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ProductItem } from '../home/home.constants';
import { MatIconModule } from '@angular/material/icon';
import {
    benefitsData,
    benefitsModel,
    options,
    payementMethodData,
    payementMethodModel,
    ProductRecap,
    products,
    productsRecap,
} from './cart.constants';
import { MatCardModule } from '@angular/material/card';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductCardCarouselComponent } from '../../shared/components/product-card-carousel/product-card-carousel.component';
import { PageContent, pageContent } from '../product/product.constants';
import { Id } from '../../shared/models/id';
import { SelectOptions } from '../../shared/models/selectOptions';
import { SelectComponent } from '../../shared/components/select/select.component';

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
    ],
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    standalone: true,
})
export default class CartComponent {
    protected benefitsData: benefitsModel[] = benefitsData;
    protected readonly options: SelectOptions = options;
    protected readonly selected: string = 'ONE';
    protected payementMethodData: payementMethodModel[] = payementMethodData;
    protected productRecap: ProductRecap[] = productsRecap;
    protected giftWrap: boolean = false;
    protected productsData: ProductItem[] = products;
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

    protected products: ProductItem[] = [
        {
            id: 7,
            title: 'Google Pixel 7a',
            imageSrc: 'assets/pixel-7a.webp',
            description:
                'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
            price: '1 259,00 €',
        },
    ];
    private _snackBar: MatSnackBar = inject(MatSnackBar);
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
    protected deleteFn() {
        this._snackBar.open('Produit supprimé du panier', 'Fermer', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: 'error-snackbar',
        });
    }
}
