import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-error',
    standalone: true,
    imports: [MatButtonModule, RouterLink],
    template: `
        <div
            class="flex justify-around items-center flex-col tablet:flex-row h-1/3"
        >
            <div class="flex flex-col gap-4">
                <div>
                    <p class="font-thin text-gray-600">
                        Ça casse un peu l'ambiance...
                    </p>
                    <p class="text-4xl font-bold">Il n'y a rien à voir ici.</p>
                    <p class="font-thin">
                        Tous ces incroyables produits ne vont pas s'acheter tout
                        seuls !
                    </p>
                </div>
                <div>
                    <button
                        color="primary"
                        mat-raised-button
                        routerLink="/home"
                    >
                        Voir les bonnes affaires
                    </button>
                </div>
            </div>
            <div>
                <img alt="empty-cart" class="w-96" src="assets/404.svg" />
            </div>
        </div>
    `,
})
export class ErrorComponent {}
