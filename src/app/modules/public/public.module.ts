import {NgModule, OnInit} from '@angular/core';
import {PublicComponent} from './components/public.component';
import {LoginComponent} from './components/login/login.component';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonsModule, CardsFreeModule, CheckboxModule, MDBBootstrapModule, WavesModule} from 'angular-bootstrap-md';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RegisterComponent} from "./components/register/register.component";
import {AppRoutingModule} from "../../../routes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    CheckboxModule,
    WavesModule,
    ButtonsModule,
    AppRoutingModule,
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
