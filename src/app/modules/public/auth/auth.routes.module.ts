import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    { path: 'auth', component: AuthComponent},
    { path: 'auth/login', component: LoginComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutesModule {}
