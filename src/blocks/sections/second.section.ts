import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductCardComponent } from "@/components/ProductCard.component";

@Component({
  selector: "app-second-section",
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <section class="py-12 px-4 max-w-7xl mx-auto min-h-[38rem] flex flex-col justify-center items-center gap-24 pt-[8rem]">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold">
          Today <span class="text-red-500">Special</span> Offers
        </h2>
        <p class="text-gray-600 mt-2 max-w-2xl mx-auto">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500s
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <app-product-card
          *ngFor="let product of products"
          [product]="product"
        ></app-product-card>
      </div>
    </section>
  `,
})

export class SecondSection {
  products = [
    {
      id: 1,
      name: "Kebab",
      image: "/assets/images/kebab.webp",
      rating: 4.5,
      description:
        "A delicious dish made from meat, often served with vegetables and rice.",
      price: 15.99,
    },
    {
      id: 2,
      name: "Chicken Tikka",
      image: "/assets/images/chicken-tikka.webp",
      rating: 4.8,
      description:
        "A popular Indian dish made from chunks of chicken marinated in spices and yogurt.",
      price: 12.99,
    },
    {
      id: 3,
      name: "Desi Chowmein",
      image: "/assets/images/chowmein.webp",
      rating: 4.2,
      description:
        "A Chinese stir-fried noodle dish that is popular in India.",
      price: 10.99,
    },
    {
      id: 4,
      name: "Chicken Chawarma",
      image: "/assets/images/chawarma.webp",
      rating: 4.6,
      description:
        "A Middle Eastern dish made from meat, often served with pita bread.",
      price: 13.99,
    },
  ];
}
