import { CategoryApi } from '@app/model/api.model';
import { CategoryItem } from '@app/marketplace/home/home.constants';
import { Signup } from '@app/auth/signup/signup.models';

export const CommonMapper = {
    mapCategoryApiToCategoryItem(categoryApi: CategoryApi): CategoryItem {
        return {
            id: categoryApi.id,
            title: categoryApi.name,
            description: categoryApi.description,
            imageSrc: '',
            tooltip: categoryApi.name,
            link: categoryApi.name,
        };
    },
};
