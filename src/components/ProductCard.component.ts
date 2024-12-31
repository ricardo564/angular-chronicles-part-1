import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImageComponent } from "@/components/Image.component";
import { getRandomLinkForRedirection } from "@/utils/getRandomLinkForRedirection";
import type { Product } from "@/types/product";

@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [CommonModule, ImageComponent],
  template: `
    <div
      class="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow w-[19rem] h-[33rem] relative bg-gradient-to-b from-white via-white  to-red-500/30"
    >
      <div class="relative mb-3">
        <app-image
          [src]="'assets/svg/semicircle.svg'"
          [alt]="'Dashed arrow path'"
          [className]="
            'w-[15rem] h-auto -top-6 left-[1rem] object-contain absolute rotate-180'
          "
        ></app-image>

        <app-image
          [src]="product.image"
          [alt]="product.name"
          [className]="'w-[12rem] h-[12rem] object-cover rounded-lg mx-auto'"
        />

        <p class="text-white text-xs font-bold rounded-full px-2 py-1 bg-yellow-600 w-[4rem] h-[4rem] flex items-center justify-center truncate absolute right-12 -mt-12 border-4 border-white">
          {{ product.price }} $
        </p>
      </div>

      <div class="w-full flex justify-center">
        <span
          class="flex items-center gap-1 bg-white px-2 py-1 rounded-full text-sm"
        >
          <app-image
            [src]="'assets/svg/star.svg'"
            [alt]="'rating'"
            [className]="'w-4 h-4'"
          />
          <span>{{ product.rating }}</span>
        </span>
      </div>

      <div class="flex flex-col gap-2 items-center mt-6">
        <h3 class="font-semibold text-lg mb-2 text-red-500">
          {{ product.name }}
        </h3>
        <p class="text-gray-600 text-sm mb-4 max-w-[15rem] text-center px-2">
          {{ product.description }}
        </p>
      </div>

      <a
        [href]="[getRandomLinkForRedirection()]"
        class="bg-red-500 text-white px-4 py-2 rounded-full text-sm hover:bg-red-600 transition-colors absolute -bottom-4 inset-x-0 w-[8rem] mx-auto text-center"
        rel="noopener"
        target="_blank"
      >
        Order Now
      </a>
    </div>
  `,
})
export class ProductCardComponent {
  @Input() product!: Product;

  getRandomLinkForRedirection() {
    return getRandomLinkForRedirection();
  }
}