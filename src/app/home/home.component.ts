import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSection } from '@/blocks/sections/First.section';
import { SecondSection } from '@/blocks/sections/second.section';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, FirstSection, SecondSection],
  template: `
    <app-first-section></app-first-section>
    <app-second-section></app-second-section>
  `
})

export class HomeComponent {

}
