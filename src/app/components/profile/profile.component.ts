import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { UserInfoService } from '../../services/user-info.service';
import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;
  isProfile:boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private session:SessionService,
    private userInfo:UserInfoService) { }

  ngOnInit() {
    if (this.route.snapshot.url[0].path ==="user") {
      console.log("in")
       this.route.params.subscribe((params)=> {
          this.userInfo.getUserProfile(String(params["id"])).subscribe((json)=> {
              this.user=json
              this.isProfile=false;
          });
       });
    } else {
         this.user= this.session.user;
         this.isProfile=true;
    }
    
  }




}
