import { Routes } from '@angular/router';

import { CategoriesComponent } from './components/categories/categories.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { ProfileComponent } from './components/profile/profile.component';
import { WorkflowFormComponent } from './components/workflow-form/workflow-form.component';
import { SignupComponent } from './components/signup/signup.component';
import { WorkflowDisplayComponent } from './components/workflow-display/workflow-display.component';

import { SessionService } from './services/session.service';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent},
  { path: 'profile', component: ProfileComponent, canActivate:[SessionService]},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contribute', component: WorkflowFormComponent, canActivate:[SessionService]},
  { path: 'workflows/:id', component: WorkflowDisplayComponent,canActivate:[SessionService] }
];
