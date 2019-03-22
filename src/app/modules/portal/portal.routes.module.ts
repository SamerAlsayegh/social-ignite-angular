import {ManagementModule} from "./modules/management/management.module";
import {ImagesModule} from "./modules/images/images.module";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BillingModule} from "./modules/billing/billing.module";
import {TeamModule} from "./modules/team/team.module";
import {ProfileModule} from "./modules/profile/profile.module";
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {ScheduleModule} from "./modules/schedule/schedule.module";
import {PostModule} from "./modules/post/post.module";


const routes: Routes = [
  {path: 'dashboard', loadChildren: () => DashboardModule},
  {path: 'post', loadChildren: () => PostModule},
  {path: 'calendar', loadChildren: () => ScheduleModule},
  {path: 'manage', loadChildren: () => ManagementModule},
  {path: 'profile', loadChildren: () => ProfileModule},
  {path: 'team', loadChildren: () => TeamModule},
  {path: 'billing', loadChildren: () => BillingModule},
  {path: 'photos', loadChildren: () => ImagesModule},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutesModule {
}
