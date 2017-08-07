import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"



import { CommentService } from '../../services/comment.service'
import { SessionService } from '../../services/session.service'

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Output() commentsUpdated= new EventEmitter();

  user;

  constructor(
    private session: SessionService, 
    private comment: CommentService, 
    private actRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.user=this.session.user;
    console.log(this.user);


  }

  submitForm(myForm) {
    const comment= {
      title: myForm.value.title,
      text: myForm.value.text
    }
    this.actRoute.params.subscribe((params)=> {
      this.comment.createAComment(String(params["id"]), comment).subscribe((json)=> {
        this.commentsUpdated.emit(json);
        myForm.resetForm()
      });
    });
  }

}
