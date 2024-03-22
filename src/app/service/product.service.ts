import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { PageContentV2 } from '@feat/marketplace/product/product.constants';
import { Product, Products } from '@app/shared/models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private _http: HttpClient = inject(HttpClient);

    getProducts(): Observable<Products> {
        return this._http.get<Products>('http://localhost:8000/api/v1/inventory/list')
            .pipe(tap(console.log));
    }

    getProductFromId(uid: string): Observable<PageContentV2> {
        return this._http.get<Product>(`http://localhost:8000/api/v1/inventory/getFromUid/${uid}`)
            .pipe(
                // tap(console.log),
                map((product) => ({
                    urlImage: [product.mainPic],
                    shortDescription: product.shortDesc,
                    longDescription: product.longDesc,
                    colors: product.colors,
                    name: product.name,
                    price: product.price.toString()
                }) as PageContentV2)
            );
    }

    getProductFromUid(uid: string): Observable<Product> {
        return this._http.get<Product>(`http://localhost:8000/api/v1/inventory/getFromUid/${uid}`);
    }
}
