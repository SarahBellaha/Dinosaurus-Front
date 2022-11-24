import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserClass } from '../classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input()
  user: UserClass = new UserClass();

  constructor(private router: Router) {}

  gotoHome() {
    this.router.navigateByUrl('/home');
  }
  gotoAccount() {
    this.router.navigateByUrl('/useraccount');
  }
  onSubmit() {
    this.user.password == this.user.password
      ? this.gotoAccount()
      : this.gotoHome();
  }
  // Add user to DB

  ngOnInit(): void {}
}
