import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserClass } from '../classes/user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() isLoggedIn: string =
    this.localStorage.getData('loggedIn') || 'false';
  constructor(private localStorage: LoginService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.localStorage.clear();
    this.localStorage.saveData('loggedIn', 'false');
    window.location.replace('http://localhost:4200/home');
  }
}
