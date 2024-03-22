import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { UserInfosService } from '@feat/account/user-infos/user-infos.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
    UpdateUserInfosDialogComponent
} from '@feat/account/user-infos/update-user-infos-dialog.component';
import { PasswordModel, UserDetailModel } from '@app/shared/models/user-detail';
import { passwordForm } from '@app/formly/formly-presets/user-infos';
import { mapUserDetailToFormlyFieldConfig } from '@app/mapper/common.mapper';
import { Store } from '@ngxs/store';
import { AuthState } from '@app/shared/store/auth/auth.state';
import { UserDetails } from '@app/shared/store/auth/auth.action';

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
    private readonly _dialog = inject(MatDialog);
    private readonly _refreshUserInfos$: Subject<void> = new Subject<void>();

    protected readonly userDetailsGroup = new FormGroup({});
    protected readonly userDetailsModel: UserDetailModel = {} as UserDetailModel;
    protected readonly passwordGroup = new FormGroup({});
    protected readonly passwordModel: PasswordModel = {} as PasswordModel
    protected readonly passwordFields: FormlyFieldConfig[] = passwordForm;

    private readonly _store: Store = inject(Store);
    protected readonly userInfo: Observable<FormlyFieldConfig[]> = this._store
        .selectOnce(AuthState.getUserDetails)
        .pipe(
            map(userDetail => {
                if (userDetail === null)
                    return mapUserDetailToFormlyFieldConfig()
                return mapUserDetailToFormlyFieldConfig(userDetail)
            })
        );

    protected openSaveDialog(userInfos: UserDetailModel | PasswordModel): void {
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
