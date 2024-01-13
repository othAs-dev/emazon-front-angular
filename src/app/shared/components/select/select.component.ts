import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectOption, SelectOptions } from '@app/shared/models/selectOptions';
import { Id } from '@app/shared/models/id';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-select',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule],
    template: `
        <select
            [(ngModel)]="selected"
            (change)="onSelectionChange()"
            class="py-2 px-2 pr-2 block w-auto border-gray-300 rounded-md h-9
        text-sm focus:border-blue-500 focus:ring-blue-500 border"
        >
            <option
                *ngFor="let option of options; trackBy: trackBySelectOptions"
                [value]="option.option"
            >
                {{ option.value }}
            </option>
        </select>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
    @Input() selected!: string;
    @Input({ required: true }) options!: SelectOptions;
    @Output() selectedChange = new EventEmitter<string>();

    trackBySelectOptions = (index: Id, option: SelectOption): Id => option.id;

    onSelectionChange() {
        this.selectedChange.emit(this.selected);
    }
}
