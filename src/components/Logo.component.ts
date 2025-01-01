import { Component } from "@angular/core";
import { ImageComponent } from "./Image.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-logo",
  standalone: true,
  imports: [ImageComponent, RouterLink],
  template: `
    <a class="flex items-center" [routerLink]="['/']" rel="home">
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
