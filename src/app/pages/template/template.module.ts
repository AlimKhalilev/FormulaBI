import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesModule } from 'src/app/components/features/features.module';
import { TemplatePageRoutingModule } from './template-routing.module';
import { TemplatePage } from './template.page';

@NgModule({
  imports: [
    CommonModule,
    TemplatePageRoutingModule,
    FeaturesModule
  ],
  declarations: [
    TemplatePage, 
  ],
})
export class TemplatePageModule {

}