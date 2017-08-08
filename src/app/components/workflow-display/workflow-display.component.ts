import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../../services/workflow.service';
import {ActivatedRoute} from "@angular/router"


@Component({
  selector: 'app-workflow-display',
  templateUrl: './workflow-display.component.html',
  styleUrls: ['./workflow-display.component.css']
})
export class WorkflowDisplayComponent implements OnInit {
  workflow;
  creator;
  
  isDetail:boolean;

  catname;
  isCategory:boolean;

  constructor(private workflowService: WorkflowService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.url[0].path ==="workflows") {
    this.route.params.subscribe((params)=> {
      this.workflowService.getSingleWorkflow(String(params["id"])).subscribe((json)=> {
      console.log(json)
      
      this.workflow=json.workflow;
      this.creator=json.user;
      this.isDetail=true;
      this.isCategory=false;
    
          });
        });
    } else {
      this.route.params.subscribe((params)=> {
      this.catname=String(params["catname"]);
      console.log(this.catname);
      this.isCategory=true;
      this.isDetail=false;
      });
    }
  }




}
