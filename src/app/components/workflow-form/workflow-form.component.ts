import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkflowService } from '../../services/workflow.service';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-workflow-form',
  templateUrl: './workflow-form.component.html',
  styleUrls: ['./workflow-form.component.css'],
  providers: [WorkflowService, CategoryService]
})
export class WorkflowFormComponent implements OnInit {

  tree:Array<object>;

  constructor(private workflow: WorkflowService, private category: CategoryService, private router: Router) { }

  ngOnInit() {
    
  }

  submitForm(myForm) {
    console.log(myForm)
    // this.workflow.createAWorkflow(myForm.body).subscribe((res)=> {
    //   this.router.navigate(['/profile'])
    // })
  }

  createTree() {
     this.category.getTreeCategories().subscribe((categoryList) => {
       this.tree=categoryList;
      
       });
     
  }

}
