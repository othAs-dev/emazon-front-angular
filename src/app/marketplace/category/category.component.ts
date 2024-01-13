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
} from './category.constants';
import { ProductCardComponent } from '@app/shared/components/product-card/product-card.component';
import { products } from '@app/marketplace/home/home.constants';
import { FooterComponent } from '@app/shared/components/footer/footer.component';

@Component({
    selector: 'app-category',
    imports: [
        CommonModule,
        MatChipsModule,
        FormsModule,
        SelectComponent,
        ProductCardComponent,
        FooterComponent,
    ],
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CategoryComponent {
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
