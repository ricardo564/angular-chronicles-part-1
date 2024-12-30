import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { LogoComponent } from "@/components/Logo.component";
import { DownloadShortcutBlock } from "@/blocks/downloadShortcut/DownloadShortcut.block";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, LogoComponent, DownloadShortcutBlock],
  template: `
  <header class="max-w-[1400px] mx-auto flex justify-between items-center  px-4 py-4">
    <app-logo></app-logo>
    <nav class="hidden md:flex space-x-8">
      <a *ngFor="let item of menuItems"
        [href]="item.link"
        class="text-gray-700 hover:text-red-500 transition-colors">
        {{item.label}}
      </a>
    </nav>
    <app-download-shortcut></app-download-shortcut>
  </header>
  `
})

export class HeaderComponent {
  menuItems = [
    { label: 'Today Special Offers', link: '#' },
    { label: 'Why FoodHut', link: '#' },
    { label: 'Our Menu', link: '#' },
    { label: 'Our Popular Food', link: '#' }
  ];
}
