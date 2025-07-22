import { Component, inject, OnInit } from '@angular/core';
import { Toy } from '../Interfaces/Toy';
import { LoginService } from '../login.service';
import { ToysService } from '../service/toys.service';
import { ANNOUNCEMENT } from 'src/shared/constants';

@Component({
  selector: 'app-user-toys',
  templateUrl: './user-toys.component.html',
  styleUrls: ['./user-toys.component.css'],
  standalone: false,
})
export class UserToysComponent implements OnInit {
  toys: Toy[] = [];
  private readonly toyService: ToysService = inject(ToysService);
  private readonly localStorage: LoginService = inject(LoginService);
  readonly ANNOUNCEMENT = ANNOUNCEMENT;

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

  deleteToy(id: number) {
    console.log(id);
    this.toyService.removeToy(id).subscribe((data) => console.log(data));
    window.location.reload();
  }
}
