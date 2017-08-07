import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MaterializeDirective} from "angular2-materialize";
import { WorkflowService } from '../../services/workflow.service';
import { CategoryService } from '../../services/category.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-workflow-form',
  templateUrl: './workflow-form.component.html',
  styleUrls: ['./workflow-form.component.css'],
})
export class WorkflowFormComponent implements OnInit {

  items;

  constructor(private workflow: WorkflowService, private category: CategoryService, private router: Router, private session: SessionService) { }

  ngOnInit() {
    
  }

  submitForm(myForm) {
    const theWorkFlow = {
    title: myForm.value.title,
    languages : myForm.value.languages,
    file: myForm.value.file,
    category:myForm.value.category
  };

    this.workflow.createAWorkflow(theWorkFlow).subscribe((res)=> {
      this.router.navigate(['/profile'])
    })
  }

  createTree() {
     this.category.getTreeCategories().subscribe((categoryList) => {
       this.items=categoryList;
      
       });
     
  }

}
