import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopComponent} from "./shop/shop.component";

const routes: Routes = [
  {path: '', component: ShopComponent},
  // {path: 'pages', component: PagesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutesModule { }
