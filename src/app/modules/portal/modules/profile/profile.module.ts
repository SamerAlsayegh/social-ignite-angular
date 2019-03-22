import {NgModule} from '@angular/core';
import {ProfileRoutesModule} from './profile.routes.module';

import {IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxLayoutModule,} from "igniteui-angular";
import {ButtonsModule, MDBBootstrapModule, WavesModule} from "angular-bootstrap-md";
import {CommonModule} from "@angular/common";
import {SettingsComponent} from "./settings/settings.component";

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
    ProfileRoutesModule
  ],
  declarations: [
    // Page Management
    SettingsComponent,

  ],
})
export class ProfileModule {
}
