import {NgModule} from '@angular/core';
import {DashboardRoutesModule} from './dashboard.routes.module';

import {IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxLayoutModule,} from "igniteui-angular";
import {ButtonsModule, MDBBootstrapModule, WavesModule} from "angular-bootstrap-md";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {Dashboard1Component} from "./home/dashboard1/dashboard1.component";
import {StatsCard2Component} from "./home/common/stats-card2/stats-card2.component";
import {StatsCardComponent} from "./home/common/stats-card/stats-card.component";

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    ButtonsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxLayoutModule,
    DashboardRoutesModule
  ],
  declarations: [
    // Page Management
    HomeComponent,
    // Dashboard1Component,
    // StatsCard2Component,
    StatsCardComponent

  ],
})
export class DashboardModule {
}
