import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../Interfaces/User';
import { ERRORS, REGISTER } from 'src/shared/constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = {} as User;

  private readonly router: Router = inject(Router);
  private readonly userService: UserService = inject(UserService);
  readonly REGISTER = REGISTER;
  readonly ERRORS = ERRORS;

  // Add user to DB
  gotoHome() {
    this.router.navigateByUrl('api/login');
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(() => this.gotoHome());
  }
}
