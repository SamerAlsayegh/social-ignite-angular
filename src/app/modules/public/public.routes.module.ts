import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginModule} from "./modules/login/login.module";
import {RegisterModule} from "./modules/register/register.module";

const routes: Routes = [
  {path: '', loadChildren: () => LoginModule},
  {path: 'login', loadChildren: () => LoginModule},
  {path: 'register', loadChildren: () => RegisterModule},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutesModule { }
