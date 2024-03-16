import {
    AfterViewInit,
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    ElementRef,
    Input,
    ViewChild,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SwiperDirective } from '@app/shared/directives/swiper.directive';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';

@Component({
    selector: 'app-product-image-carousel',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    imports: [CommonModule, SwiperDirective, NgOptimizedImage],
    templateUrl: './product-image-carousel.component.html',
})
export class ProductImageCarouselComponent implements AfterViewInit {
    @Input({ required: true }) images!: string[];
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
