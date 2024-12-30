import { Component } from "@angular/core";
import { TagComponent } from "@/components/Tag.component";
import { ButtonComponent } from "@/components/Button.component";
import { InputTextComponent } from "@/components/InputText.component";
import { ImageComponent } from "@/components/Image.component";

@Component({
  selector: "app-first-section",
  standalone: true,
  imports: [TagComponent, ButtonComponent, InputTextComponent, ImageComponent],
  template: `
    <section
      class="container mx-auto px-4 py-12 flex items-center justify-between min-h-[600px]"
    >
      <div class="w-1/2 my-auto">
        <div class="flex flex-col gap-4 mb-5">
          <app-tag class="-mt-8  text-sm">
            <app-image
              [src]="'assets/svg/heartCircle.svg'"
              [alt]="'Heart circle'"
              [className]="'w-4 h-4 mr-2'"
            ></app-image>
            People Trust us
          </app-tag>
        </div>

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
              class="absolute right-2 top-[1.46rem] -translate-y-1/2 p-2 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors"
            >
              <span class="sr-only">Search</span>
              <app-image
                [src]="'assets/svg/searchIcon.svg'"
                [alt]="'Search'"
                [className]="'w-6 h-6'"
              ></app-image>
            </button>
          </app-input-text>
        </div>

        <div class="flex items-center space-x-4">
          <app-button
            [className]="'bg-red-500 text-white hover:bg-red-600'"
            [title]="'Download App'"
            label="Download App"
          ></app-button>

          <app-button
            [className]="
              'flex flex-row-reverse items-center justify-center gap-2 text-gray-700 hover:bg-gray-100 hover:text-yellow-500 h-12'
            "
            [title]="'Watch Video'"
            [label]="'Watch Video'"
          >
            <app-image
              [src]="'assets/svg/arrowRight.svg'"
              [alt]="'Arrow right'"
              [className]="'w-[3.25rem] h-[3.25rem] mt-2'"
            ></app-image>
          </app-button>
        </div>
      </div>

      <div class="w-1/2 relative my-auto flex items-center justify-center">
        <div class=" top-0 right-0 bg-red-500 rounded-full w-[500px] -z-0">
          <div class="z-10 max-h-[568px]">
            <app-image
              [src]="'/assets/images/happy-customer.png'"
              [alt]="'Happy customer'"
              [className]="
                'w-full h-auto object-contain max-h-[500px] rounded-b-full'
              "
            />
          </div>
        </div>

        <div class="absolute  inset-0 bg-transparent p-2">
          <div
            class="flex items-center space-x-2 bg-white w-max p-1 border border-gray-100 rounded-lg shadow-lg mt-[5rem] -ml-9"
          >
            <app-image
              [src]="'/assets/images/pizza.png'"
              [alt]="'Italian Pizza'"
              [className]="'w-12 h-12 rounded '"
            />
            <div>
              <p class="font-medium">Italian Pizza</p>
              <div class="flex items-center space-x-2">
                <app-image
                  [src]="'/assets/svg/star.svg'"
                  [alt]="'Star'"
                  [className]="'w-4 h-4'"
                ></app-image>
                <app-image
                  [src]="'/assets/svg/star.svg'"
                  [alt]="'Star'"
                  [className]="'w-4 h-4'"
                ></app-image>
                <app-image
                  [src]="'/assets/svg/star.svg'"
                  [alt]="'Star'"
                  [className]="'w-4 h-4'"
                ></app-image>
                <app-image
                  [src]="'/assets/svg/star.svg'"
                  [alt]="'Star'"
                  [className]="'w-4 h-4'"
                ></app-image>
                <app-image
                  [src]="'/assets/svg/starEmpty.svg'"
                  [alt]="'Star empty'"
                  [className]="'w-4 h-4'"
                ></app-image>
              </div>
              <p class="text-sm text-gray-600">$8.50</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class FirstSection {}
