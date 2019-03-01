import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PublicRoutes} from './app/modules/public/public.routes.module';
import {PublicComponent} from "./app/modules/public/components/public.component";
import {AuthGuardPublicService} from "./app/services/AuthGuard/public.authguard.service";
import {PortalComponent} from "./app/modules/portal/components/portal.component";
import {PortalRoutes} from "./app/modules/portal/portal.routes.module";
import {AuthGuardPortalService} from "./app/services/AuthGuard/portal.authguard.service";
import {AdminComponent} from "./app/modules/admin/components/admin.component";
import {AuthGuardAdminService} from "./app/services/AuthGuard/admin.authguard.service";
import {AdminRoutes} from "./app/modules/admin/admin.routes.module";


const routes: Routes = [
  {
    path: '',
    canActivate: [
      AuthGuardPublicService
    ],
    component: PublicComponent,
    children: PublicRoutes,
  },
  {
    path: '',
    canActivate: [
      AuthGuardPortalService
    ],
    component: PortalComponent,
    children: PortalRoutes,
  },
  {
    path: 'admin',
    canActivate: [
      AuthGuardAdminService
    ],
    component: AdminComponent,
    children: AdminRoutes,
  },
];


@NgModule({
  // imports: [RouterModule.forRoot(routes, {
  //     // preload all modules; optionally we could
  //     // implement a custom preloading strategy for just some
  //     // of the modules (PRs welcome 😉)
  //     preloadingStrategy: PreloadAllModules
  // })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
