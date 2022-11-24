import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToyClass } from '../classes/toy';
import { Toy } from '../Interfaces/Toy';
import { LoginService } from '../login.service';
import { ToysServiceService } from '../Toys-Service/toys-service.service';

@Component({
  selector: 'app-user-annoucement',
  templateUrl: './user-annoucement.component.html',
  styleUrls: ['./user-annoucement.component.css'],
})
export class UserAnnoucementComponent implements OnInit {
  toy: ToyClass = new ToyClass();

  constructor(private router: Router, private toyService: ToysServiceService) {}

  // Add user to DB
  gotoHome() {
    this.router.navigateByUrl('/home');
  }
  gotoToyList() {
    this.router.navigateByUrl('/useraccount/toys');
  }
  onSubmit() {
    this.toyService.save(this.toy).subscribe(() => this.gotoToyList());
  }
  ngOnInit(): void {}
}
