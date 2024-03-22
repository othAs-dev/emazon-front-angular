import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-thanks',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    template: `
        <div class="text-center h-full flex flex-col gap-14 mt-14">
            <h1 class="text-7xl font-bold">
                Merci de votre achat !
            </h1>
            <i class="pi pi-check-circle text-9xl text-green-500"></i>
            <p class="text-4xl">Vous pouvez dès à présent suivre l'avancement de votre colis sur
                votre espace client</p>
        </div>
    `,
    styleUrls: ['./thanks.component.css']
})
export default class ThanksComponent {

}
