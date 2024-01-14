import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
    selector: 'app-video-card',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        RouterLink,
        MatSnackBarModule,
    ],
    templateUrl: './video-card.component.html',
    styleUrls: ['./video-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoCardComponent {
    private _snackBar: MatSnackBar = inject(MatSnackBar);
    @Input() darkCard: boolean = false;
    @Input() rightSide: boolean = false;
    @Input() src!: string;
    @Input() title!: string;
    @Input() subtitle!: string;
    @Input() description!: string;
    @Input() link!: string;

    protected addToCart(product: string) {
        this._snackBar.open(`${product} ajouté au panier`, 'Fermer', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: 'success-snackbar',
        });
    }
}
