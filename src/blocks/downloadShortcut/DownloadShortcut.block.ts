import { Component } from "@angular/core";
import { ButtonComponent } from "@/components/Button.component";

@Component({
  selector: "app-download-shortcut",
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <a href="https://www.google.com">
      <app-button
        [className]="'bg-red-500 text-white hover:bg-red-600'"
        [title]="'Download App'"
        label="Download App"
      ></app-button>
    </a>
  `,
})
export class DownloadShortcutBlock {}
