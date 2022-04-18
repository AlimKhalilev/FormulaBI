import { ComponentsModule } from './../../components/components.module';
import { DemoPage } from './demo.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPageRoutingModule } from './demo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DemoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DemoPage],
})
export class DemoPageModule {

}