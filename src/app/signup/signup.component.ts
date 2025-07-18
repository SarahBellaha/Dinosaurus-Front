import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Users-service/user.service';
import { User } from '../Interfaces/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: false,
})
export class SignupComponent implements OnInit {
  user: User = {} as User;

  constructor(private router: Router, private userService: UserService) {}

  // Add user to DB
  gotoHome() {
    this.router.navigateByUrl('/login');
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(() => this.gotoHome());
  }

  ngOnInit(): void {}
}
