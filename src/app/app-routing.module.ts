import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./sections/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./sections/product/product.module').then((m) => m.ProductModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
