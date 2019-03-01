import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from "./components/register/register.component";


export const PublicRoutes = [
  // {path: '', component: AuthComponent, outlet: 'auth'},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

