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
  @Input() userSet:boolean=false;
  @Input() categorySet:boolean=false;

  
  workflowList; 

  constructor(private workflow: WorkflowService ) { }

  ngOnInit() {

    if (this.userSet) {
      this.workflow.getUserWorkFlows().subscribe((workflows) => {
        this.workflowList = workflows;
        console.log(this.workflowList)
      });

    } else if (this.categorySet) {

    }

  }

  // contribute() {
  //    this.route.navigate
    
  // }

}
