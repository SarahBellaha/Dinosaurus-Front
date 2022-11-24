import { Component, OnInit } from '@angular/core';
import { ToyClass } from '../classes/toy';
import { ToysServiceService } from '../Toys-Service/toys-service.service';

@Component({
  selector: 'app-user-toys',
  templateUrl: './user-toys.component.html',
  styleUrls: ['./user-toys.component.css'],
})
export class UserToysComponent implements OnInit {
  toys: ToyClass[] = [];

  constructor(private toyService: ToysServiceService) {}

  ngOnInit() {
    this.toyService.findAll().subscribe((data) => {
      this.toys = data;
    });
  }
}
