import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from "./components/register/register.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class PublicRoutesModule { }
