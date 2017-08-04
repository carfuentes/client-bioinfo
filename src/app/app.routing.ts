import { Routes } from '@angular/router';

import { CategoriesComponent } from './components/categories/categories.component';

import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WorkflowFormComponent } from './components/workflow-form/workflow-form.component';

import { SessionService } from './services/session.service';


export const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, canActivate:[SessionService]},
  { path: 'login', component: LoginComponent },
  { path: 'contribute', component: WorkflowFormComponent, canActivate:[SessionService]}
];
