import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductItem} from "../../../marketplace/home/home.constants";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() products!: ProductItem[];
  protected trackByProductsData = (id: number, item: ProductItem) => item.id;
}
