import { Id } from '@app/shared/models/id';

export interface CategoryApi {
    id: Id;
    name: string;
    description: string;
    image: string;
}
