import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error:null;

  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    const user = {
      name: myForm.value.name,
      username: myForm.value.username,
      password: myForm.value.password,
      image:myForm.value.image,
      github: myForm.value.github,
      twitter: myForm.value.twitter
      
    };

    
    this.session.signup(user).subscribe(
      (data) => {
        this.router.navigate(['/profile']);
      },
      (err) => {
        this.error = err;
      });



   
  }

}
