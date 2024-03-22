import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchFields } from '@app/formly/formly-presets/search-form';
import { AuthService } from '@feat/auth/auth.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BehaviorSubject, EMPTY, map, mergeMap, Observable, of, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatBadgeModule } from '@angular/material/badge';
import { Select, Store } from '@ngxs/store';
import { CartState } from '@feat/marketplace/cart/cart.state';
import { Logout, UserDetails } from '@app/shared/store/auth/auth.action';
import { AuthState, AuthStateModel } from '@app/shared/store/auth/auth.state';

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
export default class MarketplaceComponent implements OnInit{
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

    @Select(AuthState.isAuthenticated)
    protected readonly isLoggedIn: Observable<boolean>;

    protected readonly _store: Store = inject(Store);
    protected readonly nameOrConnect: Observable<string> = this._store.select(AuthState.getUserDetails)
        .pipe(
            tap(console.log),
            mergeMap(userDetails => {
                if (userDetails != null)
                    return of(`${userDetails.firstname}👋`)
                return of('Se connecter')
            })
        )
    protected productsAddedToCart$ = new BehaviorSubject<number>(0);
    private store: Store = inject(Store);
    private destroyRef: DestroyRef = inject(DestroyRef);

    protected logout = () => {

        this._store.dispatch(Logout)
    };

    protected submit(): void {
        if (this.form.valid) {
            alert(JSON.stringify(this.model));
        }
    }

    ngOnInit(): void {
        this.store.select(CartState.itemsInCart)
            .pipe(
                tap( itemCount => this.productsAddedToCart$.next(itemCount)),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe()
    }
}
