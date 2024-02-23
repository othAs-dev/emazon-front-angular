import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
    FormlyFieldConfig,
    FormlyFormOptions,
    FormlyModule,
} from '@ngx-formly/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchFields } from '../formlyConfig/formly-presets/search-form';
import { AuthService } from '@app/auth/auth.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CartService } from '@app/marketplace/cart/cart.service';
import { BehaviorSubject, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
    selector: 'app-marketplace',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterLink,
        RouterOutlet,
        FormlyModule,
        ReactiveFormsModule,
        MatTooltipModule,
        MatBadgeModule,
    ],
    templateUrl: './marketplace.component.html',
    styleUrls: ['./marketplace.component.css'],
    standalone: true,
})
export default class MarketplaceComponent {
    protected isExpanded = false;
    protected showSmartphonesMenu = false;
    protected showTabletsMenu = false;
    protected showComputersMenu = false;
    protected showAudioAndSoundMenu = false;
    protected showDesktopSubMenu = false;
    protected showLaptopSubMenu = false;
    protected showHeadphonesSubMenu = false;
    protected showSpeakersSubMenu = false;
    protected form = new FormGroup({});
    protected model: any = {};
    protected options: FormlyFormOptions = {};
    protected fields: FormlyFieldConfig[] = SearchFields;
    private readonly _authService: AuthService = inject(AuthService);
    protected readonly isLoggedIn: boolean =
        this._authService.isAuthenticated();
    private _cartService = inject(CartService);
    protected productsAddedToCart$ = new BehaviorSubject<number>(0);

    isLogged() {
        if (this.isLoggedIn) {
            const userDetailsString = localStorage.getItem('user_details');
            if (userDetailsString) {
                const userDetails: { firstname: string; lastname: string } =
                    JSON.parse(userDetailsString);
                return `${userDetails.firstname} 👋`;
            }
        }
        return 'Se connecter';
    }

    protected logout = () => this._authService.logout();

    protected submit(): void {
        if (this.form.valid) {
            alert(JSON.stringify(this.model));
        }
    }

    private _productsInCart$ = this._cartService
        .getAllProducts()
        .pipe(
            tap((product) => {
                return this.productsAddedToCart$.next(product.length);
            }),
            takeUntilDestroyed()
        )
        .subscribe();
}
