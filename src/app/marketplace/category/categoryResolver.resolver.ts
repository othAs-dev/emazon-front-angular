import { ResolveFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { CategoryService } from '@app/service/category.service';
import { Category } from '@app/shared/models/category';

export const CategoryResolver: ResolveFn<Category> = (
    route,
    state,
    router = inject(Router)
) =>
    inject(CategoryService)
        .getCategory(route.params['id'])
        .pipe(
            catchError((err) => {
                router.navigate(['/marketplace/home']);
                return EMPTY;
            })
        );
