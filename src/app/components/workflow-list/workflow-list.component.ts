import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WorkflowService } from '../../services/workflow.service';


@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.css'],
})
export class WorkflowListComponent implements OnInit {
  @Input() approved:boolean=true;
  
  workflowList; 

  constructor(private workflow: WorkflowService, private route: Router ) { }

  ngOnInit() {

    if (this.approved) {

      this.workflow.getUserApprovedWorkFlows().subscribe((workflows) => {
        this.workflowList = workflows;
      
      });
    } else {

      this.workflow.getUserNotApprovedWorkFlows().subscribe((workflows) => {
        this.workflowList = workflows;
       
      });
    }

  }

  getDetails(id) {
     this.route.navigate(["/workflows", id])
    
  }

}
