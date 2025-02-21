import { Component } from "@angular/core";
import { ImageComponent } from "./Image.component";

@Component({
  selector: "app-logo",
  standalone: true,
  imports: [ImageComponent,],
  template: `
    <a class="flex items-center z-[999]" [href]="'#intro-section'" rel="home">
      <app-image
        [src]="'assets/logo.svg'"
        [alt]="'Food Hut'"
        [className]="'w-[7rem]'"
      ></app-image>
      <span class="text-2xl font-bold ml-2 sr-only">Food Hut</span>
    </a>
  `,
})
export class LogoComponent {}
