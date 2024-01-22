import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryItem } from '@app/marketplace/home/home.constants';
import { map, Observable } from 'rxjs';
import { CategoryApi } from '@app/model/api.model';
import { CommonMapper } from '@app/mapper/common.mapper';
import { Id } from '@app/shared/models/id';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private _http: HttpClient = inject(HttpClient);
    public getAllCategories(): Observable<CategoryItem[]> {
        return this._http
            .get<CategoryApi[]>('http://localhost:8000/api/v1/category/list')
            .pipe(map((v) => v.map(CommonMapper.mapCategoryApiToCategoryItem)));
    }
    public getCategory(id: Id): Observable<CategoryItem> {
        return this._http
            .get<CategoryApi>(`http://localhost:8000/api/v1/category/${id}`)
            .pipe(map(CommonMapper.mapCategoryApiToCategoryItem));
    }
}
