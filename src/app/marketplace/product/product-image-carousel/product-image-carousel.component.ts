import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwiperDirective} from "../swiper.directive";
import {SwiperContainer} from "swiper/swiper-element";
import {SwiperOptions} from "swiper/types";
import {register} from "swiper/element/bundle";
import {ProductItem} from "../../home/home.constants";

register();
@Component({
  selector: 'app-product-image-carousel',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [CommonModule, SwiperDirective],
  templateUrl: './product-image-carousel.component.html',
  styleUrls: ['./product-image-carousel.component.css']
})
export class ProductImageCarouselComponent implements AfterViewInit{
  @Input({required: true}) images!: string[];
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;
  protected index = 0;

  // Swiper
  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    pagination: { clickable: true },
  };

  swiperThumbsConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  };

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = this.index;
    this.swiperThumbs.nativeElement.swiper.activeIndex = this.index;
  }
  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }
}
