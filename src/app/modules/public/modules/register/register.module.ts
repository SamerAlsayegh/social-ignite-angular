import {NgModule} from '@angular/core';
import {RegisterRoutesModule} from './register.routes.module';

import {IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxLayoutModule,} from "igniteui-angular";
import {ButtonsModule, CheckboxModule, MDBBootstrapModule, WavesModule} from "angular-bootstrap-md";
import {CommonModule} from "@angular/common";
import {RegisterComponent} from "./register/register.component";
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
    RegisterRoutesModule
  ],
  declarations: [
    // Page Management
    RegisterComponent,

  ],
})
export class RegisterModule {
}
