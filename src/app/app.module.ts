import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DropdownTreeviewModule } from 'ng2-dropdown-treeview';
import { TreeModule } from 'angular-tree-component';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import {SessionService} from './services/session.service'

import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';

import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WorkflowListComponent } from './components/workflow-list/workflow-list.component';
import { WorkflowDetailComponent } from './components/workflow-detail/workflow-detail.component';
import { WorkflowFormComponent } from './components/workflow-form/workflow-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    LoginComponent,
    ProfileComponent,
    WorkflowListComponent,
    WorkflowDetailComponent,
    WorkflowFormComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    TreeModule,
    DropdownTreeviewModule.forRoot()
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
