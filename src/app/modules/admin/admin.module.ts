import {NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonsModule, CheckboxModule, MDBBootstrapModule, WavesModule} from 'angular-bootstrap-md';
import {ToastrModule} from "ngx-toastr";
import {AdminComponent} from "./components/admin.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {MembersComponent} from "./components/members/members.component";
import {AdminMenuComponent} from "./shared/admin.menu.component";
import {
  IgxButtonModule,
  IgxIconModule,
  IgxLayoutModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxToggleModule
} from "igniteui-angular";
import {StatsCardComponent} from "./components/dashboard/common/stats-card/stats-card.component";
import {AdminRoutesModule} from "./admin.routes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),
    CheckboxModule,
    WavesModule,
    ButtonsModule,
    IgxNavigationDrawerModule,
    IgxButtonModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxToggleModule,
    AdminRoutesModule
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
