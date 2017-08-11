import { Component, OnInit, Input } from '@angular/core';
import { UserInfoService} from '../../services/user-info.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user;
  @Input() isProfile;
  @Input() title;
  @Input() isCat;
  @Input() isWf;
  

  constructor(private userService:UserInfoService) { }

  ngOnInit() {
    if(this.isCat) {
      this.userService.getUserProfile(this.isCat).subscribe((data)=>{
        this.user=data;
      })


    }
  }

}
