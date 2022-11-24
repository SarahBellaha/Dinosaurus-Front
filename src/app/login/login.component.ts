import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserClass } from '../classes/user';
import { User } from '../Interfaces/User';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input()
  user: UserClass = new UserClass();
  @Input()
  userInfos?: User;
  @Input()
  isLoggedIn: boolean = false;

  constructor(private router: Router, private localStorage: LoginService) {}

  gotoHome() {
    this.router.navigateByUrl('/home');
  }

  async onSubmit() {

    await this.localStorage.logUser(this.user.email, this.user.password).subscribe(user => {
      this.userInfos = user;
      this.isLoggedIn = true;

      if(this.isLoggedIn === true && this.userInfos) {
      this.localStorage.saveData("userId", `${this.userInfos.id}`);
      this.localStorage.saveData("userEmail", `${this.userInfos.email}`);
      this.localStorage.saveData("userPassword", `${this.userInfos.password}`);
      this.localStorage.saveData("loggedIn", "true");
      window.location.replace('http://localhost:4200/useraccount/informations');
    }
    });
    
  }
  // Add user to DB

  ngOnInit(): void {}
}
