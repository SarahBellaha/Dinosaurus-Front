import { Component, inject, Input, OnInit } from '@angular/core';
import { Transaction } from '../Interfaces/Transaction';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
import { ANNOUNCEMENT } from 'src/shared/constants';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css'],
  standalone: false,
})
export class UserRequestsComponent implements OnInit {
  @Input() requests?: Transaction[];

  private readonly userService: UserService = inject(UserService);
  private readonly localStorage: LoginService = inject(LoginService);
  readonly ANNOUNCEMENT = ANNOUNCEMENT;

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests(): void {
    const id = Number(this.localStorage.getData('userId'));
    this.userService.getRequests(id).subscribe((requests) => {
      this.requests = requests;
      console.log(requests);
    });
  }

  acceptRequest(id: number) {
    console.log(id);
    this.userService
      .removeTransaction(id)
      .subscribe((data) => console.log(data));
  }
}
