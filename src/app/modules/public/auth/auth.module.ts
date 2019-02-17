import {NgModule, OnInit} from '@angular/core';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {AuthRoutesModule} from './auth.routes.module';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
      MDBBootstrapModule.forRoot(),
      // ReactiveFormsModule,
        AuthRoutesModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        // AuthComponent
    ],
})
export class AuthModule implements OnInit {

    constructor(private router: Router) {}

    ngOnInit() {
        console.log('configured routes: ', this.router.config);
    }

}
