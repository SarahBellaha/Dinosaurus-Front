import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../Interfaces/Transaction';
import { User } from '../Interfaces/User';
import { LoginService } from '../login.service';
import { UserService } from '../Users-service/user.service';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css']
})
export class UserRequestsComponent implements OnInit {

  @Input() requests?: Transaction[];

  constructor(private route: ActivatedRoute, private userService: UserService, private localStorage: LoginService) {}
  

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests(): void {
    const id = Number(this.localStorage.getData("userId"));
    this.userService.getRequests(id)
    .subscribe(requests => {
      this.requests = requests;
      console.log(requests);
    });
  }

  acceptRequest(id: number) {
    console.log(id);
    this.userService.removeTransaction(id).subscribe((data)=> console.log(data));
  }

}
