import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToyClass } from '../classes/toy';
import { LoginService } from '../login.service';
import { ToysServiceService } from '../Toys-Service/toys-service.service';

@Component({
  selector: 'app-user-annoucement',
  templateUrl: './user-annoucement.component.html',
  styleUrls: ['./user-annoucement.component.css'],
})
export class UserAnnoucementComponent implements OnInit {
  toy: ToyClass = new ToyClass();

  constructor(
    private router: Router,
    private toyService: ToysServiceService,
    private localStorage: LoginService
  ) {}

  // Add user to DB
  gotoHome() {
    this.router.navigateByUrl('/home');
  }
  gotoToyList() {
    this.router.navigateByUrl('/useraccount/toys');
  }

  onSubmit() {
    const id = Number(this.localStorage.getData('userId'));
    this.toyService.saveToy(this.toy, id).subscribe(() => this.gotoToyList());
  }
  ngOnInit(): void {}
}
