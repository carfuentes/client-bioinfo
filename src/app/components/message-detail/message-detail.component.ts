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
  @Input() isAdmin;
  messageList;
  conver;

  newComment={};

  constructor(private conversation: ConversationService,
              private router: Router) { }

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

   goToUserProfile(id) {
    this.router.navigate(['/user', id ]);

  }
  getDetails(id) {
     this.router.navigate(["/workflows", id])
    
  }

  
  
  
  }


