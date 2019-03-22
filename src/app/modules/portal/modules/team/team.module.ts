import {NgModule} from '@angular/core';
import {TeamRoutesModule} from './team.routes.module';

import {
  IgxAvatarModule,
  IgxButtonModule,
  IgxIconModule,
  IgxLayoutModule,
} from "igniteui-angular";
import {ButtonsModule, MDBBootstrapModule, WavesModule} from "angular-bootstrap-md";
import {CommonModule} from "@angular/common";
import {ListComponent} from "./list/list.component";

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
    TeamRoutesModule
  ],
  declarations: [
    // Page Management
    ListComponent,

  ],
})
export class TeamModule {
}
