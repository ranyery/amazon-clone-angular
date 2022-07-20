import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product-listing',
    loadChildren: () =>
      import('./pages/product-listing/product-listing.module').then(
        (m) => m.ProductListingModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
