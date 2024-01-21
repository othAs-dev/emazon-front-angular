import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
    CategoryItem,
    logoData,
    LogoItem,
    ProductItem,
    products,
} from './home.constants';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '@app/shared/components/product-card/product-card.component';
import { VideoCardComponent } from '@app/shared/components/video-card/video-card.component';
import { Id } from '@app/shared/models/id';
import { CategoryService } from '@app/service/category.service';
import { Observable, tap } from 'rxjs';

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
    styleUrls: ['./home.component.css'],
    standalone: true,
})
export default class HomeComponent {
    protected logoData: LogoItem[] = logoData;
    protected productsData: ProductItem[] = products;
    private _categoryService: CategoryService = inject(CategoryService);
    protected categoryData: Observable<CategoryItem[]> = this._categoryService
        .getAllCategories()
        .pipe(tap(console.log));

    protected trackByLogoData = (id: Id, item: LogoItem) => item.id;

    protected trackByCategoryData = (id: Id, item: CategoryItem) => item.id;
}
