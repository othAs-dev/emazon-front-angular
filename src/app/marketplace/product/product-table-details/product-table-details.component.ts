import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableRow} from "../product.constants";

@Component({
  selector: 'app-product-table-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-table-details.component.html',
  styleUrls: ['./product-table-details.component.css']
})
export class ProductTableDetailsComponent {
  @Input({required: true}) productDetail!: TableRow[];
}
