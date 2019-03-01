import {NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonsModule, CheckboxModule, MDBBootstrapModule, WavesModule} from 'angular-bootstrap-md';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "../../../routes.module";
import {AdminComponent} from "./components/admin.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {MembersComponent} from "./components/members/members.component";
import {AdminMenuComponent} from "./shared/admin.menu.component";
import {
  IgxButtonModule,
  IgxIconModule,
  IgxLayoutModule, IgxNavigationDrawerModule,
  IgxRippleModule, IgxToggleModule
} from "igniteui-angular";
import {StatsCardComponent} from "./components/dashboard/common/stats-card/stats-card.component";

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
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    MembersComponent,
    AdminMenuComponent,
    StatsCardComponent
  ],
})
export class AdminModule implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

}
