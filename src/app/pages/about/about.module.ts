import { AboutPage } from './about.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageRoutingModule } from './about-routing.module';
import { FeaturesModule } from 'src/app/components/features/features.module';

@NgModule({
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    FeaturesModule
  ],
  declarations: [
    AboutPage, 
  ],
})
export class AboutPageModule {

}