import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { inject, Injectable } from '@angular/core';
import { Product, Products } from '@app/shared/models/product';
import { ProductService } from '@app/service/product.service';
import { tap } from 'rxjs';
import { GetAllProducts, GetProductByUid } from '@app/shared/store/product/product.action';


export interface ProductStateModel {
    products: Record<string, Product>;
}

@State<ProductStateModel>({
    name: 'products',
    defaults: {
        products: {}
    }
})
@Injectable()
export class ProductState {

    private readonly _productService: ProductService = inject(ProductService);

    @Selector()
    static getProducts(state: ProductStateModel): Products {
        return Object.values(state.products);
    }

    static getProductById(id: string): (state: ProductStateModel) => Product | undefined {
        return createSelector([ProductState], (state: ProductStateModel) => state.products[id]);
    }

    static getProductsById(productIds: string[]): (state: ProductStateModel) => Products | [] {
        return createSelector([ProductState], (state: ProductStateModel) => productIds.map(id => state.products[id]));
    }


    @Action(GetProductByUid)
    getProductById(ctx: StateContext<ProductStateModel>, action: GetProductByUid) {
        const products = ctx.getState().products;
        const uid = action.uid;

        if (products[uid]) {
            return;
        }

        return this._productService.getProductFromUid(uid)
            .pipe(
                tap(product => {
                    ctx.patchState({
                        products: ({ ...products, ...{ [product.uid!]: product } })
                    });
                })
            );
    }

    @Action(GetAllProducts)
    allProducts(ctx: StateContext<ProductStateModel>) {
        return this._productService.getProducts()
            .pipe(
                tap(prds => {
                    const products: Record<string, Product> = prds.reduce((acc, curr) => ({ ...acc, ...{ [curr.uid!]: curr } }), {});
                    ctx.setState({
                        products
                    });
                })
            );
    }
}
