import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {categoryData, CategoryItem, logoData, LogoItem, ProductItem, products} from "./home.constants";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, FooterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
})
export default class HomeComponent {
  protected categoryData: CategoryItem[] = categoryData;
  protected logoData: LogoItem[] = logoData;
  protected productsData: ProductItem[] = products;
  protected trackByLogoData(id: number, item: LogoItem): number {
    return item.id;
  }

  protected trackByCategoryData(id: number, item: CategoryItem): number {
    return item.id;
  }
  protected trackByProductsData(id: number, item: ProductItem): number {
    return item.id;
  }

}
