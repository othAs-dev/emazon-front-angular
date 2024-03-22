import { TestBed } from '@angular/core/testing';

import { TokenAPIInterceptor } from './token-api.interceptor';

describe('TokenAPIInterceptor', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            TokenAPIInterceptor
        ]
    }));

    it('should be created', () => {
        const interceptor: TokenAPIInterceptor = TestBed.inject(TokenAPIInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
