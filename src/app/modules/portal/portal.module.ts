import {NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonsModule, CheckboxModule, MDBBootstrapModule, WavesModule} from 'angular-bootstrap-md';
import {ToastrModule} from "ngx-toastr";
import {PortalComponent} from "./components/portal.component";
import {PortalMenuComponent} from "./shared/menu/portal.menu.component";
import {
  IgxAvatarModule,
  IgxButtonModule,
  IgxChipsModule,
  IgxIconModule,
  IgxLayoutModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxToggleModule
} from "igniteui-angular";
import {PortalTopMenuComponent} from "./shared/top-menu/portal.top-menu.component";
import {ManagementModule} from "./modules/management/management.module";
import {ImagesModule} from "./modules/images/images.module";
import {PortalRoutesModule} from "./portal.routes.module";
import {BillingModule} from "./modules/billing/billing.module";
import {TeamModule} from "./modules/team/team.module";
import {ProfileModule} from "./modules/profile/profile.module";
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {PostModule} from "./modules/post/post.module";
import {ScheduleModule} from "./modules/schedule/schedule.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),
    CheckboxModule,
    WavesModule,
    ButtonsModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxButtonModule,
    IgxIconModule,
    IgxChipsModule,
    IgxAvatarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxToggleModule,

    PortalRoutesModule,
    ImagesModule,
    BillingModule,
    TeamModule,
    ManagementModule,
    ProfileModule,
    ScheduleModule,
    DashboardModule,
    PostModule
  ],
  declarations: [
    PortalComponent,
    PortalMenuComponent,
    PortalTopMenuComponent,

  ],
})
export class PortalModule implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

}
