import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {categoryData, CategoryItem, logoData, LogoItem} from "./home.constants";
import {FooterComponent} from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
})
export default class HomeComponent {
  protected categoryData: CategoryItem[] = categoryData
  protected logoData: LogoItem[] = logoData
  protected trackByLogoData(id: number, item: LogoItem): number {
    return item.id;
  }

  protected trackByCategoryData(id: number, item: CategoryItem): number {
    return item.id;
  }

}
