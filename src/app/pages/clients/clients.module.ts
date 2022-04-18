import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesModule } from 'src/app/components/features/features.module';
import { ClientsPage } from './clients.page';
import { ClientsPageRoutingModule } from './clients-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClientsPageRoutingModule,
    FeaturesModule
  ],
  declarations: [
    ClientsPage, 
  ]
})
export class ClientsPageModule {

}