import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../Interfaces/Transaction';
import { User } from '../Interfaces/User';
import { UserService } from '../Users-service/user.service';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css']
})
export class UserRequestsComponent implements OnInit {

  @Input() requests?: Transaction[];

  constructor(private route: ActivatedRoute, private userService: UserService) {}
  

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests(): void {
    const id = Number(this.route.snapshot.paramMap.get('toy_owner_id'));
    this.userService.getRequests(id)
    .subscribe(requests => {
      this.requests = requests;
      console.log(requests);
    });
  }

}
