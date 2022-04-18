import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { environment } from "src/environments/environment";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "demo",
    data: { name: "Демо страница" },
    loadChildren: () =>
      import("./pages/demo/demo.module").then((m) => m.DemoPageModule),
  },
  {
    path: "media/:id",
    data: { name: "Страница медия" },
    loadChildren: () =>
      import("./pages/media/media.module").then((m) => m.MediaPageModule),
  },
  {
    path: "about",
    data: { name: "Страница 'О Компании'" },
    loadChildren: () =>
      import("./pages/about/about.module").then((m) => m.AboutPageModule),
  },
  {
    path: "solutions",
    data: { name: "Страница 'Решения'" },
    loadChildren: () =>
      import("./pages/solutions/solutions.module").then((m) => m.SolutionsPageModule),
  },
  {
    path: "contacts",
    data: { name: "Страница 'Контакты'" },
    loadChildren: () =>
      import("./pages/contacts/contacts.module").then((m) => m.ContactsPageModule),
  },
  {
    path: "contacts",
    data: { name: "Страница 'Контакты'" },
    loadChildren: () =>
      import("./pages/template/template.module").then((m) => m.TemplatePageModule),
  },
  {
    path: "clients",
    data: { name: "Страница 'Клиентам'" },
    loadChildren: () =>
      import("./pages/clients/clients.module").then((m) => m.ClientsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  { useHash: true, preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
