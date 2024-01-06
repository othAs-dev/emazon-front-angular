import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from '@app/shared/components/select/select.component';
import { SelectOptions } from '@app/shared/models/selectOptions';
import {
    brandOptions,
    defaultOptions,
    priceOptions,
} from './products.constants';
import { ProductCardComponent } from '@app/shared/components/product-card/product-card.component';
import { products } from '@app/marketplace/home/home.constants';

@Component({
    selector: 'app-products',
    imports: [
        CommonModule,
        MatChipsModule,
        FormsModule,
        SelectComponent,
        ProductCardComponent,
    ],
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsComponent {
    protected defaultOptionsSelected: string = 'Prix croissant';
    protected priceOptionsSelected: string = 'all';
    protected brandOptionsSelected: string = 'Apple';
    protected defaultOptions: SelectOptions = defaultOptions;
    protected priceOptions: SelectOptions = priceOptions;
    protected brandOptions: SelectOptions = brandOptions;
    protected readonly products = products;

    onDefaultOptionsSelected(newSelected: string) {
        this.defaultOptionsSelected = newSelected;
    }

    onDefaultPriceOptionsSelected(newSelected: string) {
        this.priceOptionsSelected = newSelected;
    }

    onDefaultBrandOptionsSelected(newSelected: string) {
        this.brandOptionsSelected = newSelected;
    }
}
