import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { ProductApi } from '@app/marketplace/home/home.constants';
import { PageContent, PageContentV2 } from '@app/marketplace/product/product.constants';
import { Product, Products } from '@app/shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http: HttpClient = inject(HttpClient);

  getProducts(): Observable<Products> {
    return this.http.get<Products>("http://localhost:8000/api/v1/inventory/list")
  }

  getProductFromId(uid: string): Observable<PageContentV2> {
    return this.http.get<Product>(`http://localhost:8000/api/v1/inventory/getFromUid/${uid}`)
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
