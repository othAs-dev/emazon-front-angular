import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryApi } from '@app/model/api.model';
import { Id } from '@app/shared/models/id';
import { Categories, Category } from '@app/model/category';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private _http: HttpClient = inject(HttpClient);
    public getAllCategories(): Observable<Categories> {
        return this._http.get<CategoryApi[]>(
            'http://localhost:8000/api/v1/category/list'
        );
    }
    public getCategory(id: Id): Observable<Category> {
        return this._http.get<Category>(
            `http://localhost:8000/api/v1/category/${id}`
        );
    }
}
