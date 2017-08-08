import { Component, OnInit, Input } from '@angular/core';
import { WorkflowService } from '../../services/workflow.service';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-workflow-detail',
  templateUrl: './workflow-detail.component.html',
  styleUrls: ['./workflow-detail.component.css']
})
export class WorkflowDetailComponent implements OnInit {
  @Input() workflowId;

  creator;
  workflow;

  newComment={};
  submitted=false;
  toBeApproved=false;
  

  constructor(private workflowService: WorkflowService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.workflowService.getSingleWorkflow(this.workflowId).subscribe((data)=>
    {
      this.workflow=data.workflow;
      this.creator=data.user;

      if (this.route.snapshot.url[2].path === "check" ) {
      this.toBeApproved=true;
    }

    })
    
  
  }

  handleCommentUpdated(comment) {
    console.log(comment);
    this.newComment=comment.id;
    this.submitted=true;
  }

  approveWorkflow() {
    this.workflowService.approveWorkflow(this.workflow._id).subscribe((data) => {
    console.log(data)
    });
  }

  deleteWorkflow(id) {
    this.workflowService.deleteWorkflow(id).subscribe((data)=> {
        console.log(data);
      })
  }
}
