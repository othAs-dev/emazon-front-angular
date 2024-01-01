import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from '../../shared/components/select/select.component';
import { SelectOptions } from '../../shared/models/selectOptions';
import { options } from './products.constants';

@Component({
    selector: 'app-products',
    imports: [CommonModule, MatChipsModule, FormsModule, SelectComponent],
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsComponent {
    protected selected: string = 'Prix croissant';
    protected options: SelectOptions = options;

    onSelectedChange(newSelected: string) {
        this.selected = newSelected;
    }
}
