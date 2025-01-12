import { Component, ChangeDetectorRef, AfterViewInit } from "@angular/core";
import { ModalComponent } from "@/components/Modal.component";
import { CommonModule } from "@angular/common";
import {
  saveItemOnLocalStorage,
  getItemFromLocalStorage,
} from "@/utils/localStorageHandler";

@Component({
  selector: "intro-warning-modal",
  standalone: true,
  imports: [ModalComponent, CommonModule],
  template: `
    <app-modal
      [id]="'intro-warning-modal'"
      [title]="'🍽️ Food Hut - Angular Chronicles - Part 1'"
      [isOpen]="isOpen"
      [class]="'w-screen h-screen overflow-hidden overflow-y-scroll z-[9999]'"
      (closeModal)="closeModal()"
    >
      <div class="p-2 space-y-6">
        <div
          class="p-4 rounded-lg shadow-md bg-gradient-to-r from-green-600 to-blue-500"
        >
          <p class="text-lg font-medium text-center text-white">
            Welcome to my study project! 🚀
          </p>
        </div>

        <div class="p-4 rounded-lg bg-gray-50">
          <p class="leading-relaxed text-center text-gray-700">
            This is a demonstration of my frontend development skills, focusing
            on modern web technologies and best practices.
          </p>
        </div>

        <div class="space-y-3">
          <a
            [href]="portfolioUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 p-3 transition-colors rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span class="font-medium text-gray-700">
              Check out my portfolio
            </span>
          </a>

          <a
            [href]="'https://www.linkedin.com/in/' + linkedinUsername"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 p-3 transition-colors rounded-lg bg-blue-50 hover:bg-blue-100"
          >
            <svg
              class="w-6 h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
            <span class="font-medium text-blue-600">
              Connect with me on LinkedIn
            </span>
          </a>
        </div>

        <div
          class="flex items-center justify-between p-4 rounded-lg bg-gray-50"
        >
          <span class="text-gray-700"> Allow Analytics Tools </span>
          <button
            (click)="toggleAnalytics()"
            [class]="getToggleButtonClasses()"
            role="switch"
            [attr.aria-checked]="analyticsEnabled"
          >
            <span [class]="getToggleSpanClasses()"></span>
          </button>
        </div>

        <div class="pt-4 mt-4 border-t">
          <p class="text-sm text-center text-gray-500">
            Design Credits:
            <a
              [href]="'https://www.figma.com/' + figmaUsername"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-1 text-green-600 hover:text-green-700"
            >
              {{ figmaUsername }}
            </a>
          </p>
          <p class="mt-1 text-sm text-center text-gray-500">
            <a
              [href]="
                'https://www.figma.com/community/file/' + figmaOriginalDesign
              "
              target="_blank"
              rel="noopener noreferrer"
              class="text-green-600 hover:text-green-700"
            >
              View original design
            </a>
          </p>
        </div>
      </div>
    </app-modal>
  `,
})
export class IntroWarningModalSection implements AfterViewInit {
  linkedinUsername = "ricardo-camilo-programador-frontend-web-developer";
  portfolioUrl = "https://persona-nextjs-chronicles-part-2.netlify.app/";
  figmaUsername = "@KamranAlime";
  figmaOriginalDesign = "1103820487891554272";
  analyticsEnabled = true;
  isOpen = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    Promise.resolve().then(() => {
      saveItemOnLocalStorage("analyticsEnabled", String(this.analyticsEnabled));

      this.isOpen = true;
      this.cdr.detectChanges();
    });
  }

  closeModal(): void {
    Promise.resolve().then(() => {
      this.isOpen = false;
      this.cdr.detectChanges();
    });
  }

  openModal(): void {
    Promise.resolve().then(() => {
      this.isOpen = true;
      this.cdr.detectChanges();
    });
  }

  toggleAnalytics(): void {
    Promise.resolve().then(() => {
      this.analyticsEnabled = !this.analyticsEnabled;
      this.cdr.detectChanges();
    });
  }

  getToggleButtonClasses(): string {
    return `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
      this.analyticsEnabled ? "bg-green-600" : "bg-gray-200"
    }`;
  }

  getToggleSpanClasses(): string {
    return `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
      this.analyticsEnabled ? "translate-x-6" : "translate-x-1"
    }`;
  }
}
