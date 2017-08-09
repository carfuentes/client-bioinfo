import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../../services/workflow.service';
import {ActivatedRoute} from "@angular/router"


@Component({
  selector: 'app-workflow-display',
  templateUrl: './workflow-display.component.html',
  styleUrls: ['./workflow-display.component.css']
})
export class WorkflowDisplayComponent implements OnInit {
  workflowId;
  
  isDetail:boolean=false;
 

  catname;
  isCategory:boolean=false;

  constructor(private workflowService: WorkflowService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.url)
    if (this.route.snapshot.url[0].path ==="workflows") {
    this.route.params.subscribe((params)=> {
      this.workflowId=String(params["id"]);
      this.isDetail=true;
    });
    
    } else if(this.route.snapshot.url[0].path ==="categories")  {
      this.route.params.subscribe((params)=> {
      this.catname=String(params["catname"]);
      this.isCategory=true;
      
    });


      
    }

  }




}
