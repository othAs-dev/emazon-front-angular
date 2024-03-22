import { Brand } from '@app/shared/enums/brand';

export interface Product {
    id: string;
    uid?: string;
    name: string;
    shortDesc?: string;
    description: string;
    longDesc?: string;
    mainPic: string;
    images: string[];
    brand?: Brand;
    price: string;
    colors?: string[];
    globalQuantity: number
}

export type Products = Product[];
