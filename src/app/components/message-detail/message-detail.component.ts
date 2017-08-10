import { Component, OnInit, Input } from '@angular/core';

import { ConversationService } from '../../services/conversation.service';

import { SessionService } from '../../services/session.service';
import { ActivatedRoute, Router} from "@angular/router"

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
  @Input() converId;
  messageList;
  conver;

  newComment={};

  constructor(private conversation: ConversationService) { }

  ngOnInit() {
    this.conversation.getSingleConversation(this.converId).subscribe(data=> {
      this.conver=data;
      
    }) 

  }

  

  handleMessageUpdated(comment) {
     this.conversation.getSingleConversation(this.converId).subscribe(data=> {
      this.conver=data;
      this.newComment=comment.id;
    }) 
  }

  
  
  
  }


