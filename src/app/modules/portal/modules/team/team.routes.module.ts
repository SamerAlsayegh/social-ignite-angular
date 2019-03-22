import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {path: '', component: ListComponent},
  // {path: 'pages', component: PagesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutesModule { }
