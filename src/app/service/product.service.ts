import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { ProductApi } from '@app/marketplace/home/home.constants';
import { PageContent, PageContentV2 } from '@app/marketplace/product/product.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http: HttpClient = inject(HttpClient);

  getProducts(): Observable<ProductApi[]> {
    return this.http.get<any>("http://localhost:8000/api/v1/inventory/list")
      .pipe(
        tap(console.log)
      )
  }

  getProductFromId(uid: string): Observable<PageContentV2> {
    return this.http.get<ProductApi>(`http://localhost:8000/api/v1/inventory/getFromUid/${uid}`)
      .pipe(
        tap(console.log),
        map((product: ProductApi) => ({
          urlImage: [product.imgSrc],
          shortDescription: product.shortDesc,
          longDescription: product.longDesc,
          colors: product.colors,
          name: product.name,
          price: product.price.toString()
        }) as PageContentV2)
      )
  }
}
