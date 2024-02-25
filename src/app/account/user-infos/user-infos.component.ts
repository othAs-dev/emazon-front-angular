import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { catchError, of, Subject } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { UserInfosService } from '@app/account/user-infos/user-infos.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UpdateUserInfosDialogComponent } from '@app/account/user-infos/update-user-infos-dialog.component';
import { UserInfos } from '@app/formlyConfig/formly-presets/user-infos';
import { UserDetail } from '@app/shared/models/user-detail';

@Component({
    selector: 'app-user-infos',
    standalone: true,
    imports: [
        CommonModule,
        MatToolbarModule,
        FormlyModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSnackBarModule,
        MatDialogModule,
    ],
    templateUrl: './user-infos.component.html',
    styleUrls: ['./user-infos.component.css'],
})
export default class UserInfosComponent {
    private readonly _infosService = inject(UserInfosService);
    private readonly _snackBar: MatSnackBar = inject(MatSnackBar);
    private readonly _dialog = inject(MatDialog);
    protected readonly form = new FormGroup({});
    protected readonly model: UserDetail = {} as UserDetail;
    protected readonly fields: FormlyFieldConfig[] = UserInfos;
    private readonly _refreshUserInfos$: Subject<void> = new Subject<void>();

    protected readonly userInfos$ = this._infosService.getUserInfos$().pipe(
        catchError(() => {
            this._snackBar.open('Impossible de charger vos informations');
            return of(undefined);
        })
    );

    protected openSaveDialog(userInfos: UserDetail): void {
        console.log('userInfos', userInfos);
        const dialogRef = this._dialog.open(UpdateUserInfosDialogComponent, {
            width: '400px',
            data: userInfos,
        });
        dialogRef.afterClosed().subscribe((response) => {
            if (response) {
                this._refreshUserInfos$.next();
            }
        });
    }
}
