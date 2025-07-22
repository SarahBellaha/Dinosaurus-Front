import { Component, inject, Input, OnInit } from '@angular/core';
import { Transaction } from '../Interfaces/Transaction';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
import { ANNOUNCEMENT } from 'src/shared/constants';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css'],
  standalone: false,
})
export class UserReservationsComponent implements OnInit {
  @Input() reservations?: Transaction[];

  private readonly userService: UserService = inject(UserService);
  private readonly localStorage: LoginService = inject(LoginService);
  readonly ANNOUNCEMENT = ANNOUNCEMENT;

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    const id = Number(this.localStorage.getData('userId'));
    this.userService.getReservations(id).subscribe((reservations) => {
      this.reservations = reservations;
      console.log(reservations);
    });
  }
}
