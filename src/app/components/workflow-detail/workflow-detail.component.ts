import { Component, OnInit, Input } from '@angular/core';
import { WorkflowService } from '../../services/workflow.service';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-workflow-detail',
  templateUrl: './workflow-detail.component.html',
  styleUrls: ['./workflow-detail.component.css']
})
export class WorkflowDetailComponent implements OnInit {
  @Input() workflow;
  newComment={};
  submitted=false;

  constructor(private workflowService: WorkflowService, private route: ActivatedRoute) { }

  ngOnInit() {
  
  }

  handleCommentUpdated(comment) {
    console.log(comment);
    this.newComment=comment.id;
    this.submitted=true;
  }

}
