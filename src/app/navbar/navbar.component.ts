import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { TEXT } from 'src/shared/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: false,
})
export class NavbarComponent {
  localStorage: LoginService = inject(LoginService);
  router: Router = inject(Router);
  @Input() isLoggedIn: string =
    this.localStorage.getData('loggedIn') || 'false';
  readonly TEXT = TEXT;

  logout() {
    this.localStorage.clear();
    this.localStorage.saveData('loggedIn', 'false');
    window.location.replace('http://localhost:4200/home');
  }
}
