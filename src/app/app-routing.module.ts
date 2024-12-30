import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@/app/layouts/MainLayout.component';
import { SelectivePreloadingStrategyService } from '@/app/selective-preloading-strategy.service';
import { HomeComponent } from '@/app/home/home.component';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ]
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, {
    enableTracing: true,
    preloadingStrategy: SelectivePreloadingStrategyService,
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
