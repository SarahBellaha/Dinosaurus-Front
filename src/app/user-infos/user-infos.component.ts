import { Component, inject, Input, OnInit } from '@angular/core';
import { User } from '../Interfaces/User';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
import { TEXT } from 'src/shared/constants';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css'],
  standalone: false,
})
export class UserInfosComponent implements OnInit {
  @Input() user?: User;

  private readonly localStorage: LoginService = inject(LoginService);
  private readonly userService: UserService = inject(UserService);
  readonly TEXT = TEXT;

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = Number(this.localStorage.getData('userId'));
    this.userService.getUserDetail(id).subscribe((user) => {
      this.user = user;
      console.log(user);
    });
  }
}
