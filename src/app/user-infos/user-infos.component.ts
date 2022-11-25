import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Interfaces/User';
import { LoginService } from '../login.service';
import { ToysServiceService } from '../Toys-Service/toys-service.service';
import { UserService } from '../Users-service/user.service';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css']
})
export class UserInfosComponent implements OnInit {

  @Input() user?: User;

  constructor(private route: ActivatedRoute, private localStorage: LoginService, private userService: UserService) {}
  

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = Number(this.localStorage.getData("userId"));
    this.userService.getUserDetail(id)
    .subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

}
