import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './routes.module';


import {AppComponent} from './app/components/app.component';

import {PublicModule} from './app/modules/public/public.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {NavigationStart, Router} from "@angular/router";
import {ErrorsModule} from "./app/modules/error/error.module";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    // AnimationTransitionEvent,
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    CommonModule,
    PublicModule,
    ErrorsModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log("ok?", event)
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    })
  }

}
