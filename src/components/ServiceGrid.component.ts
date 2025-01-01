import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServiceItem } from "@/types/ServiceItem";
import { ImageComponent } from "@/components/Image.component";

@Component({
  selector: "app-service-grid",
  standalone: true,
  imports: [CommonModule, ImageComponent],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div
        *ngFor="let item of serviceItems"
        class="flex items-center gap-3 rounded-lg transition-colors"
      >
        <app-image [src]="item.path" [alt]="item.text" [className]="'w-8 h-8'"></app-image>

        <span class="text-gray-700">{{ item.text }}</span>
      </div>
    </div>
  `,
})

export class ServiceGridComponent {
  @Input() serviceItems: ServiceItem[] = [];
}
