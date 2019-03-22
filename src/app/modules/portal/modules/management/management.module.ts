import {NgModule} from '@angular/core';
import {ManagementRoutesModule} from './management.routes.module';

import {PageViewComponent} from "../../shared/page-view/page-view.component";
import {PagesComponent} from "./pages/pages.component";
import {PageComponent} from "./page/page.component";
import {IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxLayoutModule,} from "igniteui-angular";
import {ButtonsModule, MDBBootstrapModule, WavesModule} from "angular-bootstrap-md";
import {CommonModule} from "@angular/common";

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
    ManagementRoutesModule
  ],
  declarations: [
    // Page Management
    PagesComponent,
    PageComponent,
    PageViewComponent,

  ],
})
export class ManagementModule {
}
