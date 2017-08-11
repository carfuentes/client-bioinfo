import { Component, OnInit, Input } from '@angular/core';

import { ConversationService } from '../../services/conversation.service';

import { SessionService } from '../../services/session.service';
import { ActivatedRoute, Router} from "@angular/router"

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  @Input() isAdmin;

  conversationList;

  constructor(private conversation: ConversationService) { }

  ngOnInit() {
    if(this.isAdmin) {
    this.conversation.getAdminConversations().subscribe((data)=> {
    
      this.conversationList=data
     

    })
  } else {
    this.conversation.getConversations().subscribe((data)=> {
    
      this.conversationList=data;

    });
  }

  }
}
