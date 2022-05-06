import { ListProductComponent } from './components/product/list-product/list-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductComponent} from './components/product/add-product/add-product.component';

const routes: Routes = [
  { path: 'products', component: ListProductComponent},
  { path: 'product/add', component: AddProductComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
