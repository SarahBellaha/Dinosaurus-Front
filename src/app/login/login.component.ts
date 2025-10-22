import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Interfaces/User';
import { LoginService } from '../service/login.service';
import { firstValueFrom } from 'rxjs';
import { ERRORS, REGISTER, TEXT } from 'src/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  readonly user: User = {} as User;

  private readonly isLoggedIn: boolean = false;

  private readonly router: Router = inject(Router);
  private readonly localStorage: LoginService = inject(LoginService);
  readonly TEXT = TEXT;
  readonly REGISTER = REGISTER;
  readonly ERRORS = ERRORS;

  gotoHome() {
    this.router.navigateByUrl('/home');
  }

   onSubmit() {
     firstValueFrom(
      this.localStorage.logUser(this.user.email, this.user.password)
    );
    if (this.isLoggedIn === true && this.user) {
      // Save user data to local storage
      this.localStorage.saveData('userId', `${this.user.id}`);
      this.localStorage.saveData('userEmail', `${this.user.email}`);
      this.localStorage.saveData('userPassword', `${this.user.password}`);
      this.localStorage.saveData('loggedIn', 'true');
      globalThis.location.replace('/api/useraccount/informations');
    }
  }
}
