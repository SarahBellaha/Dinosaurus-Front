import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { TEXT } from 'src/shared/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: false,
})
export class NavbarComponent implements OnInit {
  localStorage: LoginService = inject(LoginService);
  router: Router = inject(Router);
  @Input() isLoggedIn: string =
    this.localStorage.getData('loggedIn') || 'false';
  readonly TEXT = TEXT;

  ngOnInit(): void {}

  logout() {
    this.localStorage.clear();
    this.localStorage.saveData('loggedIn', 'false');
    window.location.replace('http://localhost:4200/home');
  }
}
