import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { FaqItem, faqItems, PageContentV2 } from './product.constants';
import { MatTableModule } from '@angular/material/table';
import { ProductCardComponent } from '@app/shared/components/product-card/product-card.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
    ProductImageCarouselComponent
} from './product-image-carousel/product-image-carousel.component';
import {
    ProductCardCarouselComponent
} from '@app/shared/components/product-card-carousel/product-card-carousel.component';
import {
    ProductTableDetailsComponent
} from './product-table-details/product-table-details.component';
import { ProductFaqComponent } from './product-faq/product-faq.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductApi } from '../home/home.constants';
import { ProductService } from '@app/service/product.service';
import { Observable } from 'rxjs';

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
    private _productService: ProductService = inject(ProductService);
    private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private id: string = this._activatedRoute.snapshot.params['id'];

    protected readonly pageContent: Observable<PageContentV2> = this._productService.getProductFromId(this.id);
    protected readonly recommendationProducts : Observable<ProductApi[]> = this._productService.getProducts();
    protected readonly faqItems: FaqItem[] = faqItems;
    private _snackBar: MatSnackBar = inject(MatSnackBar);
    protected addToCart() {
        this._snackBar.open('Produit ajouté au panier')
    }
}
