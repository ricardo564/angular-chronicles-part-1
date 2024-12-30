import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-label",
  standalone: true,
  imports: [CommonModule],
  template: `
    <label
      [attr.for]="for"
      class="block text-sm font-medium relative"
      [class.text-gray-700]="!error"
      [class.text-red-600]="error"
    >
      <span
        class="absolute left-2 -top-2 bg-white px-2 rounded-full border border-gray-50"
      >
        {{ label }}
      </span>

      <ng-content></ng-content>

      <div *ngIf="error " class="flex gap-2 items-center align-bottom">
        <span *ngIf="required" class="text-red-600 ml-1 mt-2">*</span>
        <span *ngIf="error" class="text-sm text-red-600 mt-1 block">
          {{ error }}
        </span>
      </div>
    </label>
  `,
})
export class LabelComponent {
  @Input() for?: string;
  @Input() label?: string;
  @Input() required?: boolean = false;
  @Input() error?: string;
}
