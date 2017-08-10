import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  
  workflow;
  categories;
  languages= ["Python", "Matlab", "R"];

  constructor(
    private workflowService: WorkflowService, 
    private category: CategoryService, 
    private router: Router, 
    private route: ActivatedRoute,
    private session: SessionService
    ) { }

  ngOnInit() {
    if (this.route.snapshot.url[2]) {
      this.route.params.subscribe((params)=> {
          this.workflowService.getSingleWorkflow(String(params["id"])).subscribe((data)=>{
              this.workflow=data.workflow;
              console.log(this.workflow)
      });
    });
   
  };
   this.category.getLeavesCategories().subscribe(data=> {
      this.categories=data;
    })
       
  }
    
  

  submitForm(myForm) {
    const theWorkFlow = {
    title: myForm.value.title,
    languages : myForm.value.languages,
    file: myForm.value.file,
    category:myForm.value.category
  };

    if(!this.workflow) {
      this.workflowService.createAWorkflow(theWorkFlow).subscribe((res)=> {
      this.router.navigate(['/profile'])
     })
      }  else {
      this.workflowService.updateAWorkflow(this.workflow._id, theWorkFlow).subscribe((res)=> {
      console.log(res.message);
      this.router.navigate(['/workflows', this.workflow._id])

        });
      }
  }
   

     

}
