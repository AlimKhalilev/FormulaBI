import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsPage } from './solutions.page';
import { SolutionsPageRoutingModule } from './solutions-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SolutionsPageRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SolutionsPage, 
  ],
})
export class SolutionsPageModule {

}