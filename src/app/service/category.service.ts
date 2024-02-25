import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryApi } from '@app/shared/models/api.model';
import { Id } from '@app/shared/models/id';
import { Categories, Category } from '@app/shared/models/category';
import { Products } from '@app/shared/models/product';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private _http: HttpClient = inject(HttpClient);
    public getAllCategories(): Observable<Categories> {
        return this._http.get<CategoryApi[]>('api/v1/category/list');
    }
    public getCategory(id: Id): Observable<Category> {
        return this._http.get<Category>(`api/v1/category/${id}`);
    }

    public getProductsByCategory$(categoryName: string): Observable<Products> {
        return this._http.get<Products>(
            `api/v1/inventory/search/category/${categoryName}`
        );
    }
}
