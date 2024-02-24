import { Brand } from '@app/shared/enums/brand';

export interface Product {
    id: string;
    name: string;
    description: string;
    imgSrc: string;
    brand?: Brand;
    price: string;
    delivery?: string;
    packaging?: string;
}

export type Products = Product[];
