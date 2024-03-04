import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    CUSTOM_ELEMENTS_SCHEMA, ElementRef,
    Input, ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '@app/shared/components/product-card/product-card.component';
import { SwiperDirective } from '@app/shared/directives/swiper.directive';
import { Products } from '@app/shared/models/product';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
    selector: 'app-product-card-carousel',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ProductCardComponent, SwiperDirective],
    templateUrl: './product-card-carousel.component.html',
    styleUrls: ['./product-card-carousel.component.css'],
})
export class ProductCardCarouselComponent implements AfterViewInit {
    @ViewChild('swiper')
    swiper!: ElementRef<SwiperContainer>;
    @ViewChild('swiperThumbs')
    swiperThumbs!: ElementRef<SwiperContainer>;
    @Input({ required: true }) products!: Products;
    protected index = 0;

    ngAfterViewInit() {
        if (this.swiper && this.swiperThumbs) {
            this.swiper.nativeElement.swiper.activeIndex = this.index;
            this.swiperThumbs.nativeElement.swiper.activeIndex = this.index;
        }
    }

    swiperConfig: SwiperOptions = {
        direction: 'horizontal',
        spaceBetween: 10,
        pagination: { clickable: true },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slidesPerView: 'auto',
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
                slidesPerView: 3.3,
                spaceBetween: 20,
            },
        },
    };
}
