import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WorkflowService } from '../../services/workflow.service';
import { CategoryService } from '../../services/category.service';
import { SharedFilteringService } from '../../services/shared-filtering.service';


@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.css'],
})
export class WorkflowListComponent implements OnInit {
  @Input() approved:boolean=true;
  @Input() user;
  @Input() catname;
  @Input() language;
  @Input () isAdmin;
  @Input () workflowList;

  pattern="";
  
  constructor(
    private workflow: WorkflowService, 
    private route: Router, 
    private category: CategoryService,
    private filtering: SharedFilteringService
     ) { }

    
  ngOnInit() {
    this.filtering.patternChanging.subscribe((pattern)=> {
              this.pattern=pattern;
          })

    if (this.approved && this.user) {

      this.workflow.getUserApprovedWorkFlows(this.user._id).subscribe((workflows) => {
        this.workflowList = workflows;
      
      });
    } else if(!this.approved && this.user) {

      this.workflow.getUserNotApprovedWorkFlows(this.user._id).subscribe((workflows) => {
        this.workflowList = workflows;
       
      });
    } else if(this.catname) {
     this.getCategory(this.catname)
     
    } 

  }

  ngOnChanges(changes) {
    if(changes.catname) {
    this.catname=changes.catname.currentValue;
    this.getCategory(this.catname)
    }
  }

  getCategory(catname) {
    this.category.getWorkflowsCategories(catname).subscribe((workflows)=> {
        this.workflowList=workflows;
        console.log("entré",this.workflowList);
        
      })
  }

  getDetails(id) {
     this.route.navigate(["/workflows", id])
    
  }

  editWorkflow(id) {
     this.route.navigate(["/workflows",id,"update"]);

  }

  getUserDetails(id) {
     this.route.navigate(["/user", id])
    
  }

  goToCheck(id) {
     this.route.navigate(["/workflows", id, "check"])

  }

}
