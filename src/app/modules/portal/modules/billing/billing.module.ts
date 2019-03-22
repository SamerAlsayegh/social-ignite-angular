import {NgModule} from '@angular/core';
import {BillingRoutesModule} from './billing-routes.module';

import {IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxLayoutModule,} from "igniteui-angular";
import {ButtonsModule, MDBBootstrapModule, WavesModule} from "angular-bootstrap-md";
import {CommonModule} from "@angular/common";
import {ShopComponent} from "./shop/shop.component";

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
    BillingRoutesModule
  ],
  declarations: [
    // Page Management
    ShopComponent,

  ],
})
export class BillingModule {
}
