import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { ProfileComponent } from './components/profile/profile.component';
import { WorkflowFormComponent } from './components/workflow-form/workflow-form.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { WorkflowDisplayComponent } from './components/workflow-display/workflow-display.component';

import { SessionService } from './services/session.service';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent},
  { path: 'profile', component: ProfileComponent, canActivate:[SessionService]},
  { path: 'user/:id', component: ProfileComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contribute', component: WorkflowFormComponent, canActivate:[SessionService]},
  { path: 'workflows/:id/update', component: WorkflowFormComponent, canActivate:[SessionService]},
  { path: 'workflows/:id/check', component: WorkflowDisplayComponent, canActivate:[SessionService]},
  { path: 'workflows/:id', component: WorkflowDisplayComponent },
  { path: 'categories/:catname/workflows', component: WorkflowDisplayComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate:[SessionService] },
  { path: 'conversations', component: MessagesListComponent, canActivate:[SessionService]}
];
