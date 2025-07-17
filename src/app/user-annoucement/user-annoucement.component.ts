import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toy } from '../Interfaces/Toy';
import { LoginService } from '../login.service';
import { ToysServiceService } from '../Toys-Service/toys-service.service';

@Component({
    selector: 'app-user-annoucement',
    templateUrl: './user-annoucement.component.html',
    styleUrls: ['./user-annoucement.component.css'],
    standalone: false
})
export class UserAnnoucementComponent implements OnInit {
  readonly toy!: Toy 
  private readonly router: Router = inject(Router);
  private readonly toyService: ToysServiceService = inject(ToysServiceService);
  private readonly localStorage: LoginService = inject(LoginService);
  // Add user to DB
  gotoHome() {
    this.router.navigateByUrl('/home');
  }
  gotoToyList() {
    this.router.navigateByUrl('/useraccount/toys');
  }
  onSubmit() {
    const id = Number(this.localStorage.getData("userId"));
    this.toyService.saveToy(this.toy, id).subscribe(() => this.gotoToyList());
  }
  ngOnInit(): void {}
}
