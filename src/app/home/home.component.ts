import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroSection } from '@/blocks/sections/intro.section';
import { SpecialOffersSection } from '@/blocks/sections/specialOffers.section';
import { AboutUsSection } from '@/blocks/sections/aboutUs.section';
import { MenuSection } from '@/blocks/sections/menu.section';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, IntroSection, SpecialOffersSection, AboutUsSection, MenuSection],
  template: `
    <div class="grid grid-cols-1 gap-16">
      <intro-section></intro-section>
      <special-offers-section></special-offers-section>
      <about-us-section></about-us-section>
      <menu-section></menu-section>
    </div>
  `
})

export class HomeComponent {

}
