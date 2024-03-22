import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from '@app/shared/components/select/select.component';
import { SelectOptions } from '@app/shared/models/selectOptions';
import { brandOptions, defaultOptions, priceOptions } from './category.constants';
import { ProductCardComponent } from '@app/shared/components/product-card/product-card.component';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { Category } from '@app/shared/models/category';
import { CategoryService } from '@app/service/category.service';
import { BehaviorSubject, defer, Observable, take, tap } from 'rxjs';
import { Products } from '@app/shared/models/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorComponent } from '@app/shared/components/error/error.component';
import { ProductService } from '@app/service/product.service';

@Component({
    selector: 'app-category',
    imports: [
        CommonModule,
        MatChipsModule,
        FormsModule,
        SelectComponent,
        ProductCardComponent,
        FooterComponent,
        ErrorComponent,
    ],
    templateUrl: './category.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CategoryComponent {
    private readonly _productService: ProductService = inject(ProductService);
    private readonly _categoryService = inject(CategoryService);
    private readonly _snackBar = inject(MatSnackBar);

    @Input() category!: Category;

    protected defaultOptionsSelected: string = 'Prix croissant';
    protected priceOptionsSelected: string = 'all';
    protected brandOptionsSelected: string = 'Apple';
    protected defaultOptions: SelectOptions = defaultOptions;
    protected priceOptions: SelectOptions = priceOptions;
    protected brandOptions: SelectOptions = brandOptions;
    protected productsAvailabled$ = new BehaviorSubject(true);
    protected productsByCategory$: Observable<Products> = defer(() =>
        this._categoryService.getProductsByCategory$(this.category.name).pipe(
            take(1),
            tap((products) => {
                if (products.length === 0) {
                    this._snackBar.open("Aucun produit n'existe");
                    this.productsAvailabled$.next(false);
                }
            })
        )
    );
    protected readonly recommendationProducts: Observable<Products> = this._productService.getProducts();

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
