import { Component } from "@angular/core";
import { TagComponent } from "@/components/Tag.component";
import { ButtonComponent } from "@/components/Button.component";
import { InputTextComponent } from "@/components/InputText.component";
import { ImageComponent } from  "@/components/Image.component";

@Component({
  selector: "app-first-section",
  standalone: true,
  imports: [
    TagComponent,
    ButtonComponent,
    InputTextComponent,
    ImageComponent,
  ],
  template: `
    <section
      class="container mx-auto px-4 py-12 flex items-center justify-between min-h-[600px]"
    >
      <div class="w-1/2 my-auto">
        <app-tag class="mb-6">
          <span class="mr-2">🔥</span> People Trust us
        </app-tag>

        <h1 class="text-5xl font-bold mb-6">
          We're <span class="text-red-500">Serious</span> For<br />
          <span class="text-red-500">Food</span> &
          <span class="text-yellow-500">Delivery</span>.
        </h1>

        <p class="text-gray-600 mb-8 max-w-sm">
          Best cooks and best delivery guys all at your service. Hot tasty food
          will reach you in 60 minutes.
        </p>

        <div class="flex items-center space-x-4 mb-8 ">
          <app-input-text placeholder="Search food" class="w-96">
            <button
              class="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-yellow-400 rounded-full"
            >
              <span class="sr-only">Search</span>
              🔍
            </button>
          </app-input-text>
        </div>

        <div class="flex items-center space-x-4">
          <app-button label="Download App" variant="primary"></app-button>
          <button class="flex items-center space-x-2 text-gray-700">
            <span
              class="w-10 h-10 flex items-center justify-center bg-white rounded-full"
              >▶️</span
            >
            <span>Watch Video</span>
          </button>
        </div>
      </div>

      <div
        class="w-1/2 relative my-auto flex items-center justify-center"
      >
        <div
          class=" top-0 right-0 bg-red-500 rounded-full w-[500px] -z-0"
        >
          <div class="z-10 max-h-[568px]">
            <app-image
              [src]="'/assets/images/happy-customer.png'"
              [alt]="'Happy customer'"
              [className]="'w-full h-auto object-contain max-h-[500px] rounded-b-full'"
            />
          </div>
        </div>

        <div class="absolute top-10 right-10 bg-white p-2 rounded-lg shadow-lg">
          <div class="flex items-center space-x-2">
            <app-image
              [src]="'assets/pizza.jpg'"
              [alt]="'Italian Pizza'"
              [className]="'w-12 h-12 rounded'"
            />
            <div>
              <p class="font-medium">Italian Pizza</p>
              <p class="text-sm text-gray-600">$8.50</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
})
export class FirstSection { }
