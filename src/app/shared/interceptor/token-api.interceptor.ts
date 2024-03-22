import { inject } from '@angular/core';
import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthState } from '@app/shared/store/auth/auth.state';

export const TokenAPIInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const _store: Store = inject(Store);
    const token: string | null = _store.selectSnapshot(AuthState.token);

    if (req.url.includes('/api/v1/order') && token !== null) {
        const clone = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
        return next(clone);
    }
    return next(req);
};
