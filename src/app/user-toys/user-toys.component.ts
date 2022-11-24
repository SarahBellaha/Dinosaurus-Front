import { Component, OnInit } from '@angular/core';
import { Toy } from '../Interfaces/Toy';
import { LoginService } from '../login.service';
import { ToysServiceService } from '../Toys-Service/toys-service.service';

@Component({
  selector: 'app-user-toys',
  templateUrl: './user-toys.component.html',
  styleUrls: ['./user-toys.component.css'],
})
export class UserToysComponent implements OnInit {
  toys: Toy[] = [];

  constructor(
    private toyService: ToysServiceService,
    private localStorage: LoginService
  ) {}

  ngOnInit(): void {
    this.getUserToys();
    console.log('annonces');
  }

  getUserToys(): void {
    const id = Number(this.localStorage.getData('userId'));
    this.toyService.getUserToys(id).subscribe((toys) => {
      this.toys = toys;
      console.log(toys);
    });
  }
}
