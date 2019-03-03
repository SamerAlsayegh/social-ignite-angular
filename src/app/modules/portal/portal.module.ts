import {NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonsModule, CheckboxModule, MDBBootstrapModule, WavesModule} from 'angular-bootstrap-md';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "../../../routes.module";
import {PortalComponent} from "./components/portal.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {BillingComponent} from "./components/billing/billing.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {ImagesComponent} from "./components/images/images.component";
import {PagesComponent} from "./components/pages/pages.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {TeamComponent} from "./components/team/team.component";
import {PortalMenuComponent} from "./shared/menu/portal.menu.component";
import {
  IgxButtonModule,
  IgxIconModule,
  IgxLayoutModule, IgxNavigationDrawerModule,
  IgxRippleModule, IgxToggleModule
} from "igniteui-angular";
import {StatsCardComponent} from "./components/dashboard/common/stats-card/stats-card.component";
import {PostComponent} from "./components/post/post.component";
import {CalendarModule, DateAdapter} from "angular-calendar";
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CheckboxModule,
    WavesModule,
    ButtonsModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxButtonModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxToggleModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  declarations: [
    PortalComponent,
    DashboardComponent,
    PostComponent,
    BillingComponent,
    CalendarComponent,
    ImagesComponent,
    PagesComponent,
    ProfileComponent,
    TeamComponent,
    PortalMenuComponent,
    StatsCardComponent
  ],
})
export class PortalModule implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

}
