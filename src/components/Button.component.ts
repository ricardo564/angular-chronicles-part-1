import { Component, Input } from "@angular/core";

@Component({
  selector: "app-button",
  template: `
    <button
      class="px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
      [class]="className "
      [title]="title || 'Button'"
    >
        {{ label }}
        <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() label: string = "";
  @Input() className: string = "";
  @Input() title: string = "";
}
