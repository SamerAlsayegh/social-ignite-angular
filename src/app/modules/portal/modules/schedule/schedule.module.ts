import {NgModule} from '@angular/core';
import {ScheduleRoutesModule} from './schedule.routes.module';

import {
  IgxAvatarModule,
  IgxButtonModule,
  IgxIconModule,
  IgxLayoutModule,
} from "igniteui-angular";
import {ButtonsModule, MDBBootstrapModule, WavesModule} from "angular-bootstrap-md";
import {CommonModule} from "@angular/common";
import {ViewComponent} from "./view/view.component";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {CalendarModule, DateAdapter} from "angular-calendar";

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
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ScheduleRoutesModule
  ],
  declarations: [
    // Page Management
    ViewComponent,

  ],
})
export class ScheduleModule {
}
