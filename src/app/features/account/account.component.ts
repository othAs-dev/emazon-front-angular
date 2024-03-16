import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@feat/auth/auth.service';

@Component({
    selector: 'app-account',
    standalone: true,
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        RouterLink,
        RouterOutlet,
    ],
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
})
export default class AccountComponent {
    private readonly _authService: AuthService = inject(AuthService);
    protected logout() {
        this._authService.logout();
    }
}
