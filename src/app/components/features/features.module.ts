import { FeaturesComponent } from './features.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [FeaturesComponent],
  exports: [
    FeaturesComponent
  ]
})
export class FeaturesModule {

}