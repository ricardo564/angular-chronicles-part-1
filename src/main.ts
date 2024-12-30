/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';

bootstrapApplication(AppComponent, {providers: [provideProtractorTestingSupport(), provideRouter(routes)]}).catch((err) =>
  console.error(err),
);
