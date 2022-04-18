import { FeaturesModule } from 'src/app/components/features/features.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SwiperModule,
    FeaturesModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {

}