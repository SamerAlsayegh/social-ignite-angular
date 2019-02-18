import {LoginComponent} from './login/login.component';
import {RegisterComponent} from "./register/register.component";

export const AuthRoutes = [
  // {path: '', component: AuthComponent, outlet: 'auth'},
  {path: '', component: LoginComponent},
  {path: '', component: RegisterComponent}
];

