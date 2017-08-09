import { Component, OnInit, Input } from '@angular/core';
import { WorkflowService } from '../../services/workflow.service';
import { SessionService } from '../../services/session.service';
import {ActivatedRoute, Router} from "@angular/router"

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
  showComments=false;
  allowChecks=false;
  allowEdits=false;
  

  constructor(
    private workflowService: WorkflowService, 
    private route: ActivatedRoute, 
    private router: Router,
    private session: SessionService
    ) { }

  ngOnInit() {
    this.getWorkflow(this.workflowId);
   
  }

  ngOnChanges(changes) {
    if(changes.workflowId) {
    this.workflowId=changes.workflowId.currentValue;
    this.getWorkflow(this.workflowId);
    }
  }

  getWorkflow(workflowId) {
     this.workflowService.getSingleWorkflow(workflowId).subscribe((data)=>
    {
      this.workflow=data.workflow;
      this.creator=data.user;

      if (this.route.snapshot.url[2]) {
        this.allowChecks=true

      } else if(this.workflow.state === "Approved") {
        this.showComments=true;

      } else if (this.creator.id._id === this.session.user._id) {    
        this.allowEdits=true;
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
      this.router.navigate(["/admin"])
    });
  }

  deleteWorkflow(id) {
    this.workflowService.deleteWorkflow(id).subscribe((data)=> {
       this.router.navigate(["/admin"])
      })
  }

  editWorkflow(id) {
     this.router.navigate(["/workflows",id,"update"]);

  }
}
