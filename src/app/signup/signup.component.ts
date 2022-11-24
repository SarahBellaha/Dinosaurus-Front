import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @Input() user: User;

  constructor(private router: Router, private userService: UserServiceService) {
    this.user = new User();
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
