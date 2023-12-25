import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaqItem} from "../product.constants";
import {MatExpansionModule} from "@angular/material/expansion";

@Component({
  selector: 'app-product-faq',
  standalone: true,
    imports: [CommonModule, MatExpansionModule],
  templateUrl: './product-faq.component.html',
  styleUrls: ['./product-faq.component.css']
})
export class ProductFaqComponent {
  @Input({required: true}) faq!: FaqItem[];
  trackByFaq = (index: number, item: FaqItem) => item.question;

}
