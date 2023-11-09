import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatExpansionModule} from "@angular/material/expansion";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {FaqItem, PageContent, pageContent, faqItems} from "./product.constants";
import {MatTableModule} from "@angular/material/table";
import {ProductCardComponent} from "../../shared/components/product-card/product-card.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product',
  imports: [CommonModule, MatButtonModule, MatChipsModule, MatExpansionModule, FooterComponent, MatTableModule, ProductCardComponent, RouterLink],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
})
export default class ProductComponent {
  protected readonly pageContent: PageContent = pageContent;
  protected readonly faqItems: FaqItem[] = faqItems;
}
