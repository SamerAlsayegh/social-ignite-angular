import {NgModule} from '@angular/core';
import {ImagesRoutingModule} from './images-routing.module';

import {IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxLayoutModule,} from "igniteui-angular";
import {ButtonsModule, MDBBootstrapModule, WavesModule} from "angular-bootstrap-md";
import {CommonModule} from "@angular/common";
import {ImagesComponent} from "./gallery/images.component";
import {ImageComponent} from "./image/image.component";

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
    ImagesRoutingModule
  ],
  declarations: [
    // Page Management
    ImagesComponent,
    ImageComponent,

  ],
})
export class ImagesModule {
}
