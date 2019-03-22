import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MembersComponent} from "./components/members/members.component";

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'members', component: MembersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutesModule { }
