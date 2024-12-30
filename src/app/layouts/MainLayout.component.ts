import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/components/Header.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
  ],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-header></app-header>

      <main class="flex flex-col w-full mx-auto max-w-[1400px]">
        <router-outlet></router-outlet>
      </main>

    </div>
  `
})

export class MainLayoutComponent {}
