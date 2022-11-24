import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserClass } from '../classes/user';
import { UserService } from '../Users-service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @Input() user: UserClass;

  constructor(private router: Router, private userService: UserService) {
    this.user = new UserClass();
  }

  // Add user to DB
  gotoHome() {
    this.router.navigateByUrl('/home');
  }
  onSubmit() {
    this.userService.save(this.user).subscribe(() => this.gotoHome());
  }

  ngOnInit(): void {}
}
