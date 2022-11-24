import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Interfaces/User';
import { ToysServiceService } from '../Toys-Service/toys-service.service';
import { UserService } from '../Users-service/user.service';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css']
})
export class UserInfosComponent implements OnInit {

  @Input() user?: User;

  constructor(private route: ActivatedRoute, private userService: UserService) {}
  

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserDetail(id)
    .subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

}
