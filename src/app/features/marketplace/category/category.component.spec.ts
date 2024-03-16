import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';

describe('ProductsComponent', () => {
    let component: ProductsComponent;
    let fixture: ComponentFixture<ProductsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ProductsComponent],
        });
        fixture = TestBed.createComponent(ProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
