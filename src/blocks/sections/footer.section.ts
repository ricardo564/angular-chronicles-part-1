import { Component } from "@angular/core";
import { ImageComponent } from "@/components/Image.component";
import { ButtonComponent } from "@/components/Button.component";
import { getRandomLinkForRedirection } from "@/utils/getRandomLinkForRedirection";
import { InputTextComponent } from "@/components/InputText.component";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [ImageComponent, ButtonComponent, InputTextComponent],
  template: `
    <footer
      class="bg-white py-12 px-4 mt-auto bottom-0 w-full max-w-[1300px] mx-auto flex flex-col items-center justify-center pt-[15rem] md:pt-[5rem]"
    >
      <div
        class="flex flex-col md:flex-row w-full justify-between gap-8"
      >
        <div class="w-full md:max-w-[21rem] flex flex-col gap-4">
          <h2 class="text-red-500 text-2xl font-bold">Foodhut</h2>
          <p class="text-gray-600 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>

          <div class="flex space-x-4">
            <a
              [href]="[getRandomLinkForRedirection()]"
              class="text-[#FDB100] hover:opacity-80"
              rel="noopener"
              target="_blank"
            >
              <app-image
                [src]="'assets/svg/facebookIcon.svg'"
                [alt]="'Facebook'"
                [className]="'w-6 h-6'"
              />
            </a>
            <a
              [href]="[getRandomLinkForRedirection()]"
              class="text-[#FDB100] hover:opacity-80"
              rel="noopener"
              target="_blank"
            >
              <app-image
                [src]="'assets/svg/instagramIcon.svg'"
                [alt]="'Instagram'"
                [className]="'w-6 h-6'"
              />
            </a>
            <a
              [href]="[getRandomLinkForRedirection()]"
              class="text-[#FDB100] hover:opacity-80"
              rel="noopener"
              target="_blank"
            >
              <app-image
                [src]="'assets/svg/twitterIcon.svg'"
                [alt]="'Twitter'"
                [className]="'w-6 h-6'"
              />
            </a>
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row md:flex-nowrap justify-between w-full md:max-w-[20rem] gap-8 md:gap-4"
        >
          <div class="min-w-[10rem]">
            <h3 class="text-red-500 text-xl font-semibold">About Us</h3>
            <ul class="space-y-2">
              <li>
                <a
                  [href]="[getRandomLinkForRedirection()]"
                  class="text-gray-600 hover:text-red-500"
                  rel="noopener"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  [href]="[getRandomLinkForRedirection()]"
                  class="text-gray-600 hover:text-red-500"
                  rel="noopener"
                  target="_blank"
                >
                  Service Us
                </a>
              </li>
              <li>
                <a
                  [href]="[getRandomLinkForRedirection()]"
                  class="text-gray-600 hover:text-red-500"
                  rel="noopener"
                  target="_blank"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  [href]="[getRandomLinkForRedirection()]"
                  class="text-gray-600 hover:text-red-500"
                  rel="noopener"
                  target="_blank"
                >
                  Company
                </a>
              </li>
            </ul>
          </div>

          <div class="min-w-[10rem]">
            <h3 class="text-red-500 text-xl font-semibold">Company</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="text-gray-600 hover:text-red-500"
                  rel="noopener"
                  target="_blank"
                >
                  Partnership
                </a>
              </li>
              <li>
                <a
                  [href]="[getRandomLinkForRedirection()]"
                  class="text-gray-600 hover:text-red-500"
                  rel="noopener"
                  target="_blank"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  [href]="[getRandomLinkForRedirection()]"
                  class="text-gray-600 hover:text-red-500"
                  rel="noopener"
                  target="_blank"
                  >Privacy</a
                >
              </li>
              <li>
                <a
                  [href]="[getRandomLinkForRedirection()]"
                  class="text-gray-600 hover:text-red-500"
                  rel="noopener"
                  target="_blank"
                  >Sitemap</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full md:max-w-[20rem] flex flex-col gap-4">
          <div class="flex flex-col gap-4 mr-auto">
            <h3 class="text-red-500 text-xl font-semibold">
              Get in touch
            </h3>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-5 items-center justify-center">
            <app-input-text
              [inputClassName]="'min-w-[12rem] w-full px-4 py-2 rounded-full bg-gray-200'"
              type="email"
              placeholder="Email"
              class="min-w-[12rem] w-full px-4 py-2 rounded-lg "
            />

            <app-button
              [className]="
                'w-full sm:w-auto px-6 py-2 bg-red-500 text-white hover:bg-[#ff4542] transition-colors rounded-full'
              "
            >
              Subscribe
            </app-button>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center text-gray-600">
        <a
          [href]="[getRandomLinkForRedirection()]"
          class="hover:text-red-500"
          rel="noopener"
          target="_blank"
        >
          Copyright © 2022 Foodhut.
        </a>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  getRandomLinkForRedirection() {
    return getRandomLinkForRedirection();
  }
}
