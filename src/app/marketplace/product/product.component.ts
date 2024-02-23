import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import {
    FaqItem,
    faqItems,
    pageContent,
    PageContent,
} from './product.constants';
import { MatTableModule } from '@angular/material/table';
import { ProductCardComponent } from '@app/shared/components/product-card/product-card.component';
import { RouterLink } from '@angular/router';
import { ProductImageCarouselComponent } from './product-image-carousel/product-image-carousel.component';
import { ProductCardCarouselComponent } from '@app/shared/components/product-card-carousel/product-card-carousel.component';
import { ProductTableDetailsComponent } from './product-table-details/product-table-details.component';
import { ProductFaqComponent } from './product-faq/product-faq.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Id } from '@app/shared/models/id';
import { Product } from '@app/shared/models/product';

@Component({
    selector: 'app-product',
    imports: [
        CommonModule,
        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        FooterComponent,
        MatTableModule,
        ProductCardComponent,
        RouterLink,
        ProductImageCarouselComponent,
        ProductCardCarouselComponent,
        ProductTableDetailsComponent,
        ProductFaqComponent,
    ],
    templateUrl: './product.component.html',
    standalone: true,
})
export default class ProductComponent {
    protected readonly pageContent: PageContent = pageContent;
    protected readonly faqItems: FaqItem[] = faqItems;
    private _snackBar: MatSnackBar = inject(MatSnackBar);
    protected trackByProductsData = (id: Id, item: Product) => item.id;

    protected addToCart() {
        this._snackBar.open('Produit ajouté au panier');
    }
}
