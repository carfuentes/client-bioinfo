import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DropdownTreeviewModule } from 'ng2-dropdown-treeview';
import { TreeModule } from 'angular-tree-component';
import 'materialize-css';
import { MaterializeModule } from "angular2-materialize";

import { FileSelectDirective } from "ng2-file-upload";


import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import {SessionService} from './services/session.service'
import {CategoryService} from './services/category.service'
import { WorkflowService } from './services/workflow.service';
import { CommentService } from './services/comment.service';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';

import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WorkflowListComponent } from './components/workflow-list/workflow-list.component';
import { WorkflowDetailComponent } from './components/workflow-detail/workflow-detail.component';
import { WorkflowFormComponent } from './components/workflow-form/workflow-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { WorkflowDisplayComponent } from './components/workflow-display/workflow-display.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    LoginComponent,
    ProfileComponent,
    WorkflowListComponent,
    WorkflowDetailComponent,
    WorkflowFormComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    FileSelectDirective,
    AdminDashboardComponent,
    UserCardComponent,
    WorkflowDisplayComponent,
    CommentListComponent,
    CommentFormComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    TreeModule,
    DropdownTreeviewModule.forRoot(),
    MaterializeModule,
  ],
  providers: [SessionService, CategoryService, WorkflowService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
