import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-auth',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        FormlyModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule,
        RouterLink,
        RouterOutlet,
    ],
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    standalone: true,
})
export default class AuthComponent {}
