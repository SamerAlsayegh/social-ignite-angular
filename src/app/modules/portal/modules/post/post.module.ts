import {NgModule} from '@angular/core';
import {PostRoutesModule} from './post.routes.module';

import {IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxLayoutModule,} from "igniteui-angular";
import {ButtonsModule, MDBBootstrapModule, WavesModule} from "angular-bootstrap-md";
import {CommonModule} from "@angular/common";
import {PublishComponent} from "./publish/publish.component";

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
    PostRoutesModule
  ],
  declarations: [
    // Page Management
    PublishComponent,

  ],
})
export class PostModule {
}
