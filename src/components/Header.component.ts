import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { LogoComponent } from "@/components/Logo.component";
import { DownloadShortcutBlock } from "@/blocks/downloadShortcut/DownloadShortcut.block";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [NgFor, LogoComponent, DownloadShortcutBlock],
  template: `
    <header
      class="md:max-w-[900px] lg:max-w-[1400px] mx-auto flex justify-between items-center  px-4 py-4"
    >
      <app-logo></app-logo>
      <nav class="hidden lg:flex space-x-8">
        <a
          *ngFor="let item of menuItems"
          [href]="item.link"
          class="text-gray-700 hover:text-red-500 transition-colors"
        >
          {{ item.label }}
        </a>
      </nav>
      <app-download-shortcut></app-download-shortcut>
    </header>
  `,
})

export class HeaderComponent {
  menuItems = [
    { label: "Today Special Offers", link: "#special-offers-section" },
    { label: "Why FoodHut", link: "#about-us-section" },
    { label: "Our Menu", link: "#menu-section" },
    { label: "Our Popular Food", link: "#menu-section" },
  ];
}
