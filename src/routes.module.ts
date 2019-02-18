import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthRoutes} from './app/modules/public/public.routes.module';
import {AuthComponent} from "./app/modules/public/auth/auth.component";


const routes: Routes = [
  {
    path: '',
    // outlet: 'app',
    // redirectTo: '/auth/login',
    // pathMatch: 'full',
    component: AuthComponent,
    children: AuthRoutes,
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
