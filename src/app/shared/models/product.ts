import { Brand } from '@app/shared/enums/brand';

export interface Product {
    id: string;
    uid?: string
    name: string;
    shortDesc?: string;
    description: string;
    longDesc?: string
    imgSrc: string;
    images?: string[]
    brand?: Brand;
    price: string;
    colors?: string []
    delivery?: string;
    packaging?: string;
}

export type Products = Product[];
