import { Component, OnInit, Input, OnChanges  } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router"


import { CommentService } from '../../services/comment.service'
import { SessionService } from '../../services/session.service'

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() newComment={};

  commentList;
  constructor(
    private session: SessionService, 
    private comment: CommentService, 
    private route: ActivatedRoute,
    private router: Router,
    ) { }
  
  ngOnInit() {
    this.getComments()
  }

  ngOnChanges() {
    console.log('child change');
    this.getComments()
  }

  getComments() {
    this.route.params.subscribe((params)=> {
      this.comment.getWorkflowComments(String(params["id"])).subscribe((json)=> {
        this.commentList=json;
      });
    });

  }

  goToUserProfile(id) {
    this.router.navigate(['/user', id ]);

  }

}
