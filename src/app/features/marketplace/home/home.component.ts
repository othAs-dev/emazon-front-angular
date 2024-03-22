import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { logoData, LogoItem } from './home.constants';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '@app/shared/components/product-card/product-card.component';
import { VideoCardComponent } from '@app/shared/components/video-card/video-card.component';
import { Id } from '@app/shared/models/id';
import { CategoryService } from '@app/service/category.service';
import { Observable } from 'rxjs';
import { ProductService } from '@app/service/product.service';
import { Categories, Category } from '@app/shared/models/category';
import { Products } from '@app/shared/models/product';

@Component({
    selector: 'app-home',
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        FooterComponent,
        RouterLink,
        ProductCardComponent,
        VideoCardComponent,
    ],
    templateUrl: './home.component.html',
    standalone: true,
})
export default class HomeComponent {
    private _productService: ProductService = inject(ProductService);
    private _categoryService: CategoryService = inject(CategoryService);

    protected logoData: LogoItem[] = logoData;
    protected productsData: Observable<Products> = this._productService.getProducts();
    protected categoryData$: Observable<Categories> =
        this._categoryService.getAllCategories();

    protected trackByLogoData = (id: Id, item: LogoItem) => item.id;

    protected trackByCategoryData = (id: Id, item: Category) => item.id;
}
