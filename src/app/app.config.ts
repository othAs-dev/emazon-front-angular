import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
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

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
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
            FormlyMaterialModule
        ),
    ],
};
