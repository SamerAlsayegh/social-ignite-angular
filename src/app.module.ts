import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './routes.module';


import {AppComponent} from './app/app.component';

import {PublicModule} from './app/modules/public/public.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {NavigationStart, Router} from "@angular/router";
import {ErrorsModule} from "./app/modules/error/error.module";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RequestService} from "./app/services/shared/Request/request.service";
import {UserService} from "./app/services/shared/User/user.service";
import {AlertService} from "./app/services/shared/Alert/alert.service";
import {PortalModule} from "./app/modules/portal/portal.module";
import {AuthGuardPublicService} from "./app/services/shared/AuthGuard/public.authguard.service";
import {AuthGuardPortalService} from "./app/services/shared/AuthGuard/portal.authguard.service";
import {AuthGuardAdminService} from "./app/services/shared/AuthGuard/admin.authguard.service";
import {AdminModule} from "./app/modules/admin/admin.module";
import {MenuService} from "./app/services/shared/Menu/menu.service";
import {PageService} from "./app/services/portal/Page/page.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    CommonModule,
    AppRoutingModule,
    PublicModule,
    PortalModule,
    AdminModule,
    ErrorsModule,

  ],
  providers: [
    AuthGuardPublicService,
    AuthGuardPortalService,
    AuthGuardAdminService,
    UserService,
    RequestService,
    AlertService,
    PageService,
    MenuService
  ],
  bootstrap: [AppComponent]
})


export class AppModule {
  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log("ok?", event)
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    })
  }

}
