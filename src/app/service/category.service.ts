import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoryItem} from "@app/marketplace/home/home.constants";
import {map, Observable} from "rxjs";
import {CategoryApi} from "@app/model/api.model";
import {CommonMapper} from "@app/mapper/common.mapper";

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<CategoryItem[]> {
    return this.http.get<CategoryApi[]>("http://localhost:8000/api/v1/category/list")
        .pipe(
            map(v => v.map(CommonMapper.mapCategoryApiToCategoryItem))
        );
  }
}
