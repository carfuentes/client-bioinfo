import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"



import { CommentService } from '../../services/comment.service'
import { SessionService } from '../../services/session.service'
import { ConversationService } from '../../services/conversation.service'

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Output() commentsUpdated= new EventEmitter();
  @Input() converId;
  @Input() workflowId; 
  @Input() creatorId;

  user;

  constructor(
    private session: SessionService,
    private conversation: ConversationService,
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

    if(this.converId) {
      this.replyAcomment(myForm,comment)
    return;
  } 
  
    if(this.workflowId && this.creatorId) {
      console.log("entre")
      this.startingAthread(myForm,comment)
    return;
    } 
    this.sendingAComment(myForm,comment)
  }

  sendingAComment(myForm, comment) {
    this.actRoute.params.subscribe((params)=> {
      this.comment.createAComment(String(params["id"]), comment).subscribe((json)=> {
        this.commentsUpdated.emit(json);
        myForm.resetForm()
      });
    });
  }

  startingAthread(myForm,comment) {
    comment["creatorId"]=this.creatorId;
      this.conversation.startConversation(this.workflowId,comment).subscribe((json)=> {
         this.commentsUpdated.emit(json);
        myForm.resetForm()
        this.route.navigate(["/admin"])

        
      })

  }

  replyAcomment(myForm,comment) {
     this.conversation.replyConversation(this.converId,comment).subscribe((json)=> {
         this.commentsUpdated.emit(json);
        myForm.resetForm()
        
      })
  }

}
