import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientsPage } from "./clients.page";

export const routes: Routes = [
  {
    path: "",
    component: ClientsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsPageRoutingModule {}
