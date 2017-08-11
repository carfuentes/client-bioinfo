import { Component, OnInit, Input } from '@angular/core';
import { WorkflowService } from '../../services/workflow.service';
import { ConversationService } from '../../services/conversation.service';

import { SessionService } from '../../services/session.service';
import { ActivatedRoute, Router} from "@angular/router"

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
  showHide=false;

  

  constructor(
    private workflowService: WorkflowService, 
    private route: ActivatedRoute, 
    private router: Router,
    private session: SessionService,
    private conversation: ConversationService

    ) { }

  ngOnInit() {
    this.getWorkflow(this.workflowId);
    console.log(this.showHide);
   
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
    this.newComment={id:comment.id};
    this.submitted=true;
  }

  approveWorkflow() {
    this.workflowService.approveWorkflow(this.workflow._id).subscribe((data) => {

      let newConver= {
      creatorId: this.creator.id._id,
      title: "Your workflow has been approved",
      text: "Congratulations! Thank you for colaborate with your work"

      }

      this.conversation.startConversation(this.workflowId, newConver).subscribe((data)=> {
          console.log(data);
          this.router.navigate(["/admin"])
      })
      
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
