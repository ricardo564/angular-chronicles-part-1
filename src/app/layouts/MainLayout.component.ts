import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "@/components/Header.component";
import { FooterComponent } from "@/blocks/sections/footer.section";

@Component({
  selector: "app-main-layout",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen flex flex-col overflow-x-hidden">
      <app-header></app-header>

      <main
        class="flex flex-col w-full mx-auto md:max-w-[900px] lg:max-w-[1400px]"
      >
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
    </div>
  `,
})

export class MainLayoutComponent {}
