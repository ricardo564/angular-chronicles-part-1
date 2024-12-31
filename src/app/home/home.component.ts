import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSection } from '@/blocks/sections/First.section';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, FirstSection],
  template: `
    <app-first-section></app-first-section>
  `
})

export class HomeComponent {

}
