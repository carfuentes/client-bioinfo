import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WorkflowService } from '../../services/workflow.service';


@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.css'],
  providers:[WorkflowService]
})
export class WorkflowListComponent implements OnInit {
  
  workflowApproved; 
  workflowNotApproved;

  constructor(private workflow: WorkflowService ) { }

  ngOnInit() {

      this.workflow.getUserApprovedWorkFlows().subscribe((workflows) => {
        this.workflowApproved = workflows;
        console.log(this.workflowApproved)
      });

      this.workflow.getUserNotApprovedWorkFlows().subscribe((workflows) => {
        this.workflowNotApproved = workflows;
        console.log(this.workflowNotApproved)
      });

  }

  // contribute() {
  //    this.route.navigate
    
  // }

}
