import { Component } from '@angular/core';
import {FieldType, FormlyFieldConfig, FormlyModule} from '@ngx-formly/core';
import {MatStepperModule} from "@angular/material/stepper";
import {NgForOf, NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {StepperSelectionEvent} from "@angular/cdk/stepper";

@Component({
  selector: 'formly-field-stepper',
  styles: ['::ng-deep.mat-horizontal-stepper-header-container { margin-bottom: 10px;} ::ng-deep.mat-step-header{ border-radius: 5px !important; }'],
  template: `
      <mat-horizontal-stepper linear (selectionChange)="selectionChange($event)">
          <mat-step *ngFor="let step of field.fieldGroup; let index = index; let last = last"
                    [completed]="isValid(step)">
              <ng-template matStepLabel>
                  {{step.templateOptions?.label}}
              </ng-template>
              <formly-field class="mt-10" [field]="step"></formly-field>
              <div class="flex justify-end mt-3">
                  <button
                          *ngIf="index !== 0" class="text-xs w-fit h-fit tablet:text-sm laptop:text-md desktop:text-lg"
                          color="primary"
                          mat-stroked-button
                          matStepperPrevious
                          type="button"
                  >
                      Précédent
                      <mat-icon>keyboard_arrow_left</mat-icon>
                  </button>
                  <button *ngIf="!last" class="text-xs w-fit h-fit tablet:text-sm laptop:text-md desktop:text-lg"
                          color="primary"
                          mat-stroked-button
                          matStepperNext
                          type="button"
                          [disabled]="!isValid(step)">
                      Suivant
                      <mat-icon>keyboard_arrow_right</mat-icon>
                  </button>
                  <button *ngIf="last"
                          class="text-xs ml-2 w-fit h-fit tablet:text-sm laptop:text-md desktop:text-lg"
                          mat-raised-button
                          type="submit"
                          color="primary"
                          [disabled]="!form.valid"
                  >
                      S'inscrire
                      <mat-icon>check</mat-icon>
                  </button>
              </div>
          </mat-step>
      </mat-horizontal-stepper>
  `,
  standalone: true,
  imports: [
    MatStepperModule,
    FormlyModule,
    NgForOf,
    NgIf,
    MatIconModule,
    MatButtonModule
  ]
})
export class FormlyFieldStepperComponent extends FieldType {
  selectedIndex = 0;
  isValid(field: FormlyFieldConfig): any {
    if (field.key) {
      return field.formControl?.valid;
    }

    return field.fieldGroup
      ? field.fieldGroup.every((f) => this.isValid(f))
      : true;
  }
  selectionChange(evt: StepperSelectionEvent) {
    this.selectedIndex = evt.selectedIndex;
  }
}
