import { Id } from '@app/shared/models/id';
import { Brand } from '@app/shared/enums/brand';

export interface Product {
    id: Id;
    name: string;
    description: string;
    imgSrc: string;
    brand?: Brand;
    price: string;
    delivery?: string;
    packaging?: string;
}

export type Products = Product[];
