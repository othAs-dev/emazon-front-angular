import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, map, mergeMap, Observable, tap, toArray } from 'rxjs';
import { CategoryApi } from '@app/shared/models/api.model';
import { Id } from '@app/shared/models/id';
import { Categories, Category } from '@app/shared/models/category';
import { Products } from '@app/shared/models/product';
import { CommonMapper } from '@app/mapper/common.mapper';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private _http: HttpClient = inject(HttpClient);
    public getAllCategories(): Observable<Categories> {
        return this._http.get<CategoryApi[]>(
            'http://localhost:8000/api/v1/category/list'
        )
          .pipe(
            mergeMap(item => from(item)),
            map(category => CommonMapper.mapCategoryApiToCategoryItem(category)),
            toArray()
          );
    }
    public getCategory(id: Id): Observable<Category> {
        return this._http.get<Category>(
            `http://localhost:8000/api/v1/category/${id}`
        );
    }

    public getProductsByCategory$(categoryName: string): Observable<Products> {
        return this._http.get<Products>(
            `http://localhost:8000/api/v1/inventory/search/category/${categoryName}`
        );
    }
}
