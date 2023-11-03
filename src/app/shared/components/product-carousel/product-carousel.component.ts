import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductItem} from "../../../marketplace/home/home.constants";
import {ProductCardComponent} from "../product-card/product-card.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule}  from "@angular/material/icon";

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, MatButtonModule, MatIconModule],
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent {
  @Input() products!: ProductItem[]; // Tableau de produits

  currentIndex: number = 0;
  currentPage: number = 0;
  cardsPerPage: number = 2; // Nombre de cartes à afficher par page

  changePage(incrementor: number) {
    this.currentPage += incrementor;
    this.currentIndex += incrementor;
  }

  canShowPrev(): boolean {
    return this.currentPage > 0;
  }

  canShowNext(): boolean {
    return this.currentPage + 1 < Math.ceil(this.products.length / this.cardsPerPage);
  }
}
