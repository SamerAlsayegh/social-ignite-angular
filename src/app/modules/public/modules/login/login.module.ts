import {NgModule} from '@angular/core';
import {LoginRoutesModule} from './login.routes.module';

import {IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxLayoutModule,} from "igniteui-angular";
import {ButtonsModule, CheckboxModule, MDBBootstrapModule, WavesModule} from "angular-bootstrap-md";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    CheckboxModule,
    ReactiveFormsModule,
    WavesModule,
    ButtonsModule,
    LoginRoutesModule
  ],
  declarations: [
    // Page Management
    LoginComponent,

  ],
})
export class LoginModule {
}
