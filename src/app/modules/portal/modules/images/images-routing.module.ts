import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImagesComponent} from "./gallery/images.component";

const routes: Routes = [
  {path: '', component: ImagesComponent},
  // {path: 'pages', component: PagesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
