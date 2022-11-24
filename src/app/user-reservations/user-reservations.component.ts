import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../Interfaces/Transaction';
import { User } from '../Interfaces/User';
import { UserService } from '../Users-service/user.service';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {

  @Input() reservations?: Transaction[];

  constructor(private route: ActivatedRoute, private userService: UserService) {}
  

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    const id = Number(this.route.snapshot.paramMap.get('taker_user_id'));
    this.userService.getReservations(id)
    .subscribe(reservations => {
      this.reservations = reservations;
      console.log(reservations);
    });
  }

}
