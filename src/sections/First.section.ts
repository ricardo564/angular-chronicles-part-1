import { Component } from "@angular/core";
import { TagComponent } from "@/components/Tag.component";
import { ButtonComponent } from "@/components/Button.component";
import { InputTextComponent } from "@/components/InputText.component";
import { ImageComponent } from "@/components/Image.component";
import { DownloadShortcutBlock } from "@/blocks/downloadShortcut/DownloadShortcut.block";
import { HappyCustomerBadgeComponent } from "@/components/HappyCustomerBadge.component";

@Component({
  selector: "app-first-section",
  standalone: true,
  imports: [
    TagComponent,
    ButtonComponent,
    InputTextComponent,
    ImageComponent,
    DownloadShortcutBlock,
    HappyCustomerBadgeComponent,
  ],
  template: `
    <section
      class="mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center justify-between min-h-[600px] relative"
    >
      <app-image
        [src]="'assets/svg/dashedArrowPath.svg'"
        [alt]="'Dashed arrow path'"
        [className]="
          'w-20 h-20 md:w-28 md:h-28 absolute -top-6 left-10 md:left-28'
        "
      ></app-image>

      <app-image
        [src]="'assets/svg/citrusSlice.svg'"
        [alt]="'Citrus slice'"
        [className]="
          'w-20 h-20 md:w-28 md:h-28 absolute top-[20%] left-10 md:left-[32%]'
        "
      ></app-image>

      <app-image
        [src]="'assets/svg/vertical-progress-indicator.svg'"
        [alt]="'Vertical progress indicator'"
        [className]="'w-16 h-16  absolute bottom-0 left-0 '"
      ></app-image>

      <div class="w-full md:w-1/2 my-auto">
        <div class="flex flex-col gap-4 mb-5">
          <app-tag class="mt-4 md:-mt-8 text-sm">
            <app-image
              [src]="'assets/svg/heartCircle.svg'"
              [alt]="'Heart circle'"
              [className]="'w-4 h-4 mr-2'"
            ></app-image>
            People Trust us
          </app-tag>
        </div>

        <h1
          class="text-3xl md:text-5xl font-bold mb-6 max-w-[400px] md:max-w-none"
        >
          <span>We're</span>
          <span class="text-red-500"> Serious</span>
          <br class="md:hidden" />
          <span>For</span>
          <br />
          <span class="text-red-500">Food</span>
          <span> &</span>
          <span class="text-yellow-500"> Delivery</span>
          <span>.</span>
        </h1>

        <p class="text-gray-600 mb-8 w-full max-w-sm text-left">
          Best cooks and best delivery guys all at your service. Hot tasty food
          will reach you in 60 minutes.
        </p>

        <div
          class="flex items-center justify-center md:justify-start space-x-4 mb-8"
        >
          <app-input-text placeholder="Search food" class="w-full md:w-96">
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

        <div
          class="flex items-center justify-center md:justify-start space-x-4"
        >
          <app-download-shortcut></app-download-shortcut>

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

      <div
        class="w-full md:w-1/2 relative my-8 md:my-auto flex items-center justify-center"
      >
        <div
          class="absolute inset-0 bg-transparent p-2 h-16 -mt-[4.5rem] z-[99]"
        >
          <app-image
            [src]="'assets/svg/fire.svg'"
            [alt]="'Fire'"
            [className]="'w-10 h-10 md:w-16 md:h-16  mx-auto'"
          ></app-image>
        </div>

        <app-image
          [src]="'assets/svg/coriander-leaves.svg'"
          [alt]="'Coriander leaves'"
          [className]="
            'w-[9rem]  mx-auto absolute -top-[3.5rem] right-[8rem] rotate-16 z-[50]'
          "
        ></app-image>

        <app-image
          [src]="'assets/svg/leaf-outline.svg'"
          [alt]="'Leaf outline'"
          [className]="
            'w-[9rem]  mx-auto absolute bottom-[2rem] right-0 rotate-16 z-[50]'
          "
        ></app-image>

        <div
          class="top-0 right-0 bg-red-500 rounded-full w-[300px] md:w-[500px] -z-0 relative"
        >
          <div class="z-10 max-h-[300px] md:max-h-[500px]">
            <app-image
              [src]="'/assets/images/happy-customer.webp'"
              [alt]="'Happy customer'"
              [className]="
                'w-full h-auto object-contain max-h-[300px] md:max-h-[500px] rounded-b-full'
              "
            />
          </div>

          <app-image
            [src]="'assets/svg/semicircle.svg'"
            [alt]="'Dashed arrow path'"
            [className]="
              'w-full h-auto inset-0 top-8 md:top-12 object-contain max-h-[300px] md:max-h-[500px] absolute'
            "
          ></app-image>

          <app-image
            [src]="'assets/images/grilled-chicken-plate.webp'"
            [alt]="'Grilled chicken plate'"
            [className]="
              'w-[10rem] mx-auto absolute bottom-[2rem] -right-9 rotate-16 z-[50]'
            "
          ></app-image>

          <app-image
            [src]="'assets/images/salmon-salad-plate.webp'"
            [alt]="'Salmon salad plate'"
            [className]="
              'w-[10rem] mx-auto absolute -bottom-[5rem] right-[5rem] rotate-16 z-[50]'
            "
          ></app-image>

          <app-image
            [src]="'assets/images/grilled-salmon-vegetables.webp'"
            [alt]="'Grilled salmon vegetables'"
            [className]="
              'w-[10rem] mx-auto absolute -bottom-[5rem] left-[5rem] rotate-16 z-[50]'
            "
          ></app-image>

          <app-image
            [src]="'assets/images/buddha-bowl-sauce.webp'"
            [alt]="'Buddha bowl sauce'"
            [className]="
              'w-[10rem] mx-auto absolute bottom-[1rem] -left-[5rem] rotate-16 z-[50]'
            "
          ></app-image>
        </div>

        <app-happy-customer-badge
          [className]="'absolute top-24 -right-0'"
        ></app-happy-customer-badge>

        <div class="absolute inset-0 bg-transparent p-2">
          <div
            class="flex items-center space-x-2 bg-white w-max p-1 border border-gray-100 rounded-lg shadow-lg mt-[3rem] md:mt-[5rem] -ml-4 md:-ml-9"
          >
            <app-image
              [src]="'/assets/images/pizza.webp'"
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
