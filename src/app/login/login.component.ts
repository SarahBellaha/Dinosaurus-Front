import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Interfaces/User';
import { LoginService } from '../login.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
})
export class LoginComponent implements OnInit {
  readonly user: User = {} as User;

  private readonly isLoggedIn: boolean = false;

  private readonly router: Router = inject(Router);
  private readonly localStorage: LoginService = inject(LoginService);

  gotoHome() {
    this.router.navigateByUrl('/home');
  }

  async onSubmit() {
    await firstValueFrom(
      this.localStorage.logUser(this.user.email, this.user.password)
    );
    if (this.isLoggedIn === true && this.user) {
      // Save user data to local storage
      this.localStorage.saveData('userId', `${this.user.id}`);
      this.localStorage.saveData('userEmail', `${this.user.email}`);
      this.localStorage.saveData('userPassword', `${this.user.password}`);
      this.localStorage.saveData('loggedIn', 'true');
      window.location.replace('/api/useraccount/informations');
    }
  }
  // Add user to DB
  ngOnInit(): void {}
}
