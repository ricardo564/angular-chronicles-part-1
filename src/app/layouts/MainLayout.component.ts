import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "@/components/Header.component";
import { FooterComponent } from "@/blocks/sections/footer.section";
import { ImageComponent } from "@/components/Image.component";

@Component({
  selector: "app-main-layout",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ImageComponent],
  template: `
    <div class="min-h-screen flex flex-col overflow-x-hidden">
      <app-header></app-header>

      <app-image
        [src]="'assets/images/black-transparent-background.webp'"
        [alt]="'Black transparent background'"
        [className]="'min-w-screen w-full h-auto absolute inset-0 z-[-2]  -mt-24'"
      ></app-image>

      <main
        class="grid grid-cols-1 w-full mx-auto"
      >
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
    </div>
  `,
})

export class MainLayoutComponent {}
