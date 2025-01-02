import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImageComponent } from "@/components/Image.component";

@Component({
  selector: "app-section",
  standalone: true,
  imports: [CommonModule, ImageComponent],
  template: `
    <section
      id="app-section"
      class="relative bg-gradient-to-b from-white via-white to-[#FFF9F3] p-20 min-h-[600px] w-screen"
    >
      <div class="container mx-auto mx-auto md:max-w-[900px] lg:max-w-[1400px]">
        <div
          class="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div class="w-full lg:w-1/2 z-10">
            <h2 class="text-4xl font-bold leading-tight mb-6">
              It's Now <span class="text-red-500">More Easy</span> to
              <span class="text-amber-400">Order</span><br />
              by Our Mobile <span class="text-red-500">App</span>
            </h2>

            <p class="text-gray-600 mb-8 max-w-lg">
              All you need to do is download one of the best delivery apps, make
              a and most companies are opting for mobile app development for
              food delivery
            </p>

            <div class="flex  w-full justify-center gap-4 min-h-10 relative min-w-[17rem] max-w-[20rem]">
              <a href="#" class="transition-transform hover:scale-105 h-14 w-full ">
                <app-image
                  [src]="'assets/svg/google-play-badge.svg'"
                  [alt]="'Get it on Google Play'"
                  [className]="'h-full  w-full object-contain'"
                />
              </a>
              <a href="#" class="transition-transform hover:scale-105 h-14 w-full">
                <app-image
                  [src]="'assets/svg/app-store-badge.svg'"
                  [alt]="'Download on App Store'"
                  [className]="'h-full  w-full object-contain'"
                />
              </a>
            </div>
          </div>

          <div class="w-screen md:w-1/2 relative mt-16 md:mt-0">
            <div
              class="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-peach-100 opacity-50"
            ></div>

            <div class="relative w-full md:w-1/2 h-[17rem]">
              <div
                class="top-0 right-0 bg-red-500 rounded-full w-[25rem] h-[25rem] -z-0 relative"
                style="background-image: url('/assets/images/vintage-kitchen-display.webp'); background-size: cover; background-position: center;"
              ></div>

              <div
                class="relative lg:absolute inset-0 lg:top-16 w-[25rem] lg:w-[35rem] -ml-1 lg:-ml-[5rem] -mb-[4rem] lg:-mb-[10rem] rotate-180 -top-[28rem]"
              >
                <app-image
                  [src]="'assets/svg/semicircle.svg'"
                  [alt]="'Dashed arrow path'"
                  [className]="
                    'w-full h-auto inset-0 lg:top-16 object-contain max-h-[31rem] left-12 -bottom-[8rem]'
                  "
                ></app-image>
              </div>

              <div
                class="absolute inset-0 top-[2.5rem] w-[25rem]  object-contain h-[25rem] rounded-b-full -mt-[10rem]"
              >
                <app-image
                  [src]="'/assets/images/chef-presenting-app.webp'"
                  [alt]="'Chef presenting app'"
                  [className]="
                    'absolute inset-0 w-full  object-contain rounded-b-full z-[6]'
                  "
                />
              </div>
            </div>

            <app-image
              [src]="'assets/svg/scattered-spices.svg'"
              [alt]="'Scattered spices'"
              [className]="
                'w-[10rem] mx-auto absolute left-[33rem] lg:left-[25rem] -top-[4rem] z-[50] rotate-60 scale-150'
              "
            ></app-image>

            <app-image
              [src]="'assets/images/coriander-leaves.webp'"
              [alt]="'Coriander leaves'"
              [className]="
                'absolute -bottom-[13rem] right-[15rem] w-32 scale-150  z-[4]'
              "
            />

            <app-image
              [src]="'assets/svg/wave-lines-abstract.svg'"
              [alt]="'Wave lines abstract'"
              [className]="
                'absolute -bottom-[20rem] -right-[25rem] w-full scale-150  z-[3]'
              "
            />
          </div>
        </div>
      </div>
    </section>
  `,
})

export class AppSection {}
