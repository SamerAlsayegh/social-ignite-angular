import {NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonsModule, CheckboxModule, MDBBootstrapModule, WavesModule} from 'angular-bootstrap-md';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "../../../../routes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CheckboxModule,
    WavesModule,
    ButtonsModule,
    AppRoutingModule,
  ],
  declarations: [

  ],
})
export class PortalModule implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

}
