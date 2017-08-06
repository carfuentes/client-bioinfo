import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;
  isAdmin:boolean;

  constructor(private router: Router,private session:SessionService) { }

  ngOnInit() {
    this.user= this.session.user;
    this.isAdmin=this.user.role==="admin";
    console.log(this.isAdmin)
    
  }


}
