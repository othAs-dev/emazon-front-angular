import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
    categoryData,
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
    protected categoryData: CategoryItem[] = categoryData;
    protected logoData: LogoItem[] = logoData;
    protected productsData: ProductItem[] = products;

    protected trackByLogoData(id: Id, item: LogoItem): number {
        return item.id;
    }

    protected trackByCategoryData(id: Id, item: CategoryItem): number {
        return item.id;
    }
}
