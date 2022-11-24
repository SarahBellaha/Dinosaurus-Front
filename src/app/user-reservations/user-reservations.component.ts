import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../Interfaces/Transaction';
import { User } from '../Interfaces/User';
import { LoginService } from '../login.service';
import { UserService } from '../Users-service/user.service';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {

  @Input() reservations?: Transaction[];

  constructor(private route: ActivatedRoute, private userService: UserService, private localStorage: LoginService) {}
  

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    const id = Number(this.localStorage.getData("userId"));
    this.userService.getReservations(id)
    .subscribe(reservations => {
      this.reservations = reservations;
      console.log(reservations);
    });
  }

}
