import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicComponent} from "./app/modules/public/components/public.component";
import {AuthGuardPublicService} from "./app/services/shared/AuthGuard/public.authguard.service";
import {PortalComponent} from "./app/modules/portal/components/portal.component";
import {AuthGuardPortalService} from "./app/services/shared/AuthGuard/portal.authguard.service";
import {AdminComponent} from "./app/modules/admin/components/admin.component";
import {AuthGuardAdminService} from "./app/services/shared/AuthGuard/admin.authguard.service";
import {PortalModule} from "./app/modules/portal/portal.module";
import {PublicModule} from "./app/modules/public/public.module";
import {AdminModule} from "./app/modules/admin/admin.module";


const routes: Routes = [
  {
    path: '',
    canActivate: [
      AuthGuardPublicService
    ],
    component: PublicComponent,
    loadChildren: () => PublicModule
  },
  {
    path: '',
    canActivate: [
      AuthGuardPortalService
    ],
    component: PortalComponent,
    loadChildren: () => PortalModule
  },
  {
    path: 'admin',
    canActivate: [
      AuthGuardAdminService
    ],
    component: AdminComponent,
    loadChildren: () => AdminModule
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
