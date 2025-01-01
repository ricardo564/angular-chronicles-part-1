import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSection } from '@/blocks/sections/First.section';
import { SecondSection } from '@/blocks/sections/second.section';
import { ThirdSection } from '@/blocks/sections/thirdSection';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, FirstSection, SecondSection, ThirdSection],
  template: `
    <div class="grid grid-cols-1 gap-16">
      <app-first-section></app-first-section>
      <app-second-section></app-second-section>
      <app-third-section></app-third-section>
    </div>
  `
})

export class HomeComponent {

}
