import {NgModule, OnInit} from '@angular/core';
import {ErrorRoutesModule} from './error.routes.module';
import {CommonModule} from '@angular/common';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {PageNotFoundComponent} from "./errors/not_found/not_found.component";

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    ErrorRoutesModule
  ],
  declarations: [
    PageNotFoundComponent,
  ],
})
export class ErrorsModule implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

}
