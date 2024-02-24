import { Id } from '@app/shared/models/id';
export type CategoryAPI = 'smartphone' | 'laptop' | 'accessory' | 'tablet'

export interface Category {
    id: Id;
    name: string;
    description: string;
    image: string;
}

export type Categories = Category[];
