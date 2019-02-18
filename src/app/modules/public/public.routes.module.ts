import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from "./auth/register/register.component";
import {UserService} from "../../services/User/user.service";

export const AuthRoutes = [
  // {path: '', component: AuthComponent, outlet: 'auth'},
  {path: 'login', component: LoginComponent, canActivate: [UserService]},
  {path: 'register', component: RegisterComponent, canActivate: [UserService]}
];

