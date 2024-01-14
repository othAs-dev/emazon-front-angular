import { ChangeDetectionStrategy, Component } from '@angular/core';
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

    submit() {
        if (this.form.valid) {
            alert(JSON.stringify(this.model));
        }
    }
}
