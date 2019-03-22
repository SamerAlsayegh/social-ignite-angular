import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublishComponent} from "./publish/publish.component";

const routes: Routes = [
  {path: '', component: PublishComponent},
  // {path: 'pages', component: PagesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutesModule { }
