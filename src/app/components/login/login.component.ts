import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: Object={}
  
  error = null;

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    this.session.login({username:myForm.value.username, password:myForm.value.password}).subscribe(
      (data) => {
        this.router.navigate(['/profile']);
      },
      (err) => {
        this.error = err;
      });
  }
}

