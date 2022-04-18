import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SolutionsPage } from "./solutions.page";

export const routes: Routes = [
  {
    path: "",
    component: SolutionsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionsPageRoutingModule {}
