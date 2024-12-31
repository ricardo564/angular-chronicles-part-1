import { Component, Input } from "@angular/core";
import { ImageComponent } from "@/components/Image.component";

@Component({
  selector: "app-happy-customer-badge",
  standalone: true,
  imports: [ImageComponent],
  template: `
    <div class="{{ className }}">
      <div class="absolute inset-0 bg-yellow-400/30 blur-xl rounded-full"></div>

      <div
        class="relative flex items-center gap-1 bg-white p-3 rounded-full shadow-lg w-fit"
      >
        <div
          class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center"
        >
          <app-image
            [src]="'assets/svg/happyFace.svg'"
            [alt]="'Happy face'"
            [className]="'w-full h-auto object-cover'"
          ></app-image>
        </div>

        <div class="flex flex-col">
          <span class="font-medium text-gray-800">{{ title }}</span>
          <div class="flex items-center gap-1">
            <app-image
              [src]="'assets/svg/star.svg'"
              [alt]="'Star'"
              [className]="'w-6 h-auto object-contain'"
            ></app-image>
            <span class="text-gray-700 font-medium">{{ rating }}</span>
            <span class="text-gray-500 text-sm">({{ reviews }} Reviews)</span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HappyCustomerBadgeComponent {
  @Input() rating: number = 4.9;
  @Input() reviews: number = 1989;
  @Input() title: string = "Our Happy Customer";
  @Input() className: string = "";
}
