import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatExpansionModule} from "@angular/material/expansion";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {FaqItem, PageContent, pageContent, faqItems} from "./product.constants";
import {MatTableModule} from "@angular/material/table";
import {ProductCardComponent} from "../../shared/components/product-card/product-card.component";
import {RouterLink} from "@angular/router";
import {ProductImageCarouselComponent} from "./product-image-carousel/product-image-carousel.component";
import {
  ProductCardCarouselComponent
} from "../../shared/components/product-card-carousel/product-card-carousel.component";
import {ProductTableDetailsComponent} from "./product-table-details/product-table-details.component";
import {ProductFaqComponent} from "./product-faq/product-faq.component";

@Component({
  selector: 'app-product',
  imports: [CommonModule, MatButtonModule, MatChipsModule, MatExpansionModule, FooterComponent, MatTableModule, ProductCardComponent, RouterLink, ProductImageCarouselComponent, ProductCardCarouselComponent, ProductTableDetailsComponent, ProductFaqComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
})
export default class ProductComponent {
  protected readonly pageContent: PageContent = pageContent;
  protected readonly faqItems: FaqItem[] = faqItems;

}
