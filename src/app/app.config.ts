import {
    ApplicationConfig,
    importProvidersFrom,
    LOCALE_ID,
} from '@angular/core';
import {
    HttpEvent,
    HttpHandlerFn,
    HttpRequest,
    provideHttpClient,
    withInterceptors,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { FormlyPresetModule } from '@ngx-formly/core/preset';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { MatNativeDateModule } from '@angular/material/core';
import { initFormly } from './formlyConfig/initFormlyConfig';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { matsnackbarConfig } from '../../matsnackbar.config';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { CartState } from '@app/marketplace/cart/cart.state';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Observable } from 'rxjs';
import { environment } from '@app/environment';
registerLocaleData(localeFr);

export function apiUrlInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
    return next(
        req.clone({
            url: `${environment.apiUrl}/${req.url}`,
        })
    );
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(
            withInterceptors([(req, next) => apiUrlInterceptor(req, next)])
        ),
        provideRouter(routes, withComponentInputBinding()),
        provideAnimations(),
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: matsnackbarConfig,
        },
        importProvidersFrom(
            MatNativeDateModule,
            FormlyPresetModule,
            FormlyModule.forRoot(initFormly()),
            FormlyMaterialModule,
            NgxsModule.forRoot([CartState], {
                developmentMode: true,
                selectorOptions: {
                    suppressErrors: false,
                    injectContainerState: false,
                },
            }),
            NgxsStoragePluginModule.forRoot()
        ),
        {
            provide: LOCALE_ID,
            useValue: 'fr-FR',
        },
    ],
};
