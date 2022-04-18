import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesModule } from 'src/app/components/features/features.module';
import { ContactsPageRoutingModule } from './contacts-routing.module';
import { ContactsPage } from './contacts.page';

@NgModule({
  imports: [
    CommonModule,
    ContactsPageRoutingModule,
    FeaturesModule
  ],
  declarations: [
    ContactsPage, 
  ],
})
export class ContactsPageModule {

}