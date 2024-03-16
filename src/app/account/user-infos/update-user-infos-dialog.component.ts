import { Component, inject } from '@angular/core';
import { UserInfosService } from '@app/account/user-infos/user-infos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Id } from '@app/shared/models/id';
import { UserDetail, UserDetailModel } from '@app/shared/models/user-detail';

@Component({
    selector: 'app-update-user-user-infos-dialog',
    standalone: true,
    template: ` <h3 mat-dialog-title>Mettre à jour les données</h3>
        <mat-dialog-content>
            <p>
                Voulez-vous vraiment mettre à jour les données d'utilisateur ?
            </p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button mat-dialog-close>Annuler</button>
            <button
                color="primary"
                mat-flat-button
                (click)="updateUserInfos()"
                [disabled]="isLoading$ | async"
            >
                Mettre à jour
            </button>
        </mat-dialog-actions>`,
    imports: [MatButtonModule, MatDialogModule, AsyncPipe],
})
export class UpdateUserInfosDialogComponent {
    private readonly _userInfosService = inject(UserInfosService);
    protected readonly isLoading$ = new BehaviorSubject(false);
    private readonly _snackBar: MatSnackBar = inject(MatSnackBar);
    private _dialogRef = inject(MatDialogRef);
    protected readonly data: UserDetailModel  =
        inject(MAT_DIALOG_DATA);

    protected updateUserInfos(): void {
        this.isLoading$.next(true);
        this._userInfosService
            .updateUserInfos$(this.data)
            .subscribe({
                next: () => {
                    this._snackBar.open(
                        'Informations mises à jour avec succès'
                    );
                    this._dialogRef.close();
                },
                error: () => {
                    this._snackBar.open(
                        'Erreur lors de la mise à jour des informations'
                    );
                    this.isLoading$.next(false);
                },
            });
    }
}
