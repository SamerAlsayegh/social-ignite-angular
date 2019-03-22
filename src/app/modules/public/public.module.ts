import {NgModule, OnInit} from '@angular/core';
import {PublicComponent} from './components/public.component';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonsModule, CheckboxModule, MDBBootstrapModule, WavesModule} from 'angular-bootstrap-md';
import {ToastrModule} from "ngx-toastr";
import {PublicRoutesModule} from "./public.routes.module";
import {LoginModule} from "./modules/login/login.module";
import {RegisterModule} from "./modules/register/register.module";

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
    PublicRoutesModule,
    LoginModule,
    RegisterModule

  ],
  declarations: [
    PublicComponent
  ],
})
export class PublicModule implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

}
