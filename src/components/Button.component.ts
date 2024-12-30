import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-button',
  template: `
    <button [class]="variant === 'primary'
      ? 'bg-red-500 text-white'
      : 'bg-white text-gray-700'"
      class="px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
      {{label}}
    </button>
  `
})

export class ButtonComponent {
  @Input() label: string = '';
  @Input() variant: 'primary' | 'secondary' = 'primary';
}
