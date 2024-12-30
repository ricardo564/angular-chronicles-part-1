import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-input-text',
  template: `
    <div class="relative">
      <input
        [type]="type"
        [placeholder]="placeholder"
        class="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-red-500"
      >
      <ng-content></ng-content>
    </div>
  `
})

export class InputTextComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
