import {NgModule, OnInit} from '@angular/core';
import {PublicComponent} from './components/public.component';
import {LoginComponent} from './components/login/login.component';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonsModule, CheckboxModule, MDBBootstrapModule, WavesModule} from 'angular-bootstrap-md';
import {ToastrModule} from "ngx-toastr";
import {RegisterComponent} from "./components/register/register.component";
import {PublicRoutesModule} from "./public.routes.module";

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
  ],
  declarations: [
    PublicComponent,
    LoginComponent,
    RegisterComponent,
  ],
})
export class PublicModule implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

}
