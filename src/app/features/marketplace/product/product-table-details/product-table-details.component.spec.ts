import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTableDetailsComponent } from './product-table-details.component';

describe('ProductTableDetailsComponent', () => {
    let component: ProductTableDetailsComponent;
    let fixture: ComponentFixture<ProductTableDetailsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ProductTableDetailsComponent],
        });
        fixture = TestBed.createComponent(ProductTableDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
