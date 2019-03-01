import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CalendarComponent} from "./components/calendar/calendar.component";
import {PagesComponent} from "./components/pages/pages.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {TeamComponent} from "./components/team/team.component";
import {BillingComponent} from "./components/billing/billing.component";
import {ImagesComponent} from "./components/images/images.component";
import {PostComponent} from "./components/post/post.component";

export const PortalRoutes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'post', component: PostComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'team', component: TeamComponent},
  {path: 'billing', component: BillingComponent},
  {path: 'photos', component: ImagesComponent},
];

