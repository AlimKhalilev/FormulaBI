import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactsPage } from "./contacts.page";

export const routes: Routes = [
  {
    path: "",
    component: ContactsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsPageRoutingModule {}
