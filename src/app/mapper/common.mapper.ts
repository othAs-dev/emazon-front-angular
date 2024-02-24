import { CategoryApi } from '@app/shared/models/api.model';
import { Category } from '@app/shared/models/category';

export const CommonMapper = {
    mapCategoryApiToCategoryItem(categoryApi: CategoryApi): Category {
        return {
            id: categoryApi.id,
            name: categoryApi.name,
            description: categoryApi.description,
            image: categoryApi.imgSrc,
        };
    },
};
