import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwiperContainer} from "swiper/swiper-element";
import {SwiperOptions} from "swiper/types";
import {ProductItem} from "../../../marketplace/product/product.constants";
import {ProductCardComponent} from "../product-card/product-card.component";
import {SwiperDirective} from "../../../marketplace/product/swiper.directive";

@Component({
  selector: 'app-product-card-carousel',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [CommonModule, ProductCardComponent, SwiperDirective],
  templateUrl: './product-card-carousel.component.html',
  styleUrls: ['./product-card-carousel.component.css']
})
export class ProductCardCarouselComponent implements AfterViewInit{

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;
  @Input({required: true}) products!: ProductItem[];
  protected index = 0;

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = this.index;
    this.swiperThumbs.nativeElement.swiper.activeIndex = this.index;
  }
  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    pagination: { clickable: true },
    loop: true,
    slidesPerView: "auto",
    breakpoints: {
      400: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
    },
  };}
