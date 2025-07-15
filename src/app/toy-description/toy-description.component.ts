import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Toy } from '../Interfaces/Toy';
import { User } from '../Interfaces/User';
import { LoginService } from '../login.service';
import { ToysServiceService } from '../Toys-Service/toys-service.service';
import { UserService } from '../Users-service/user.service';

@Component({
    selector: 'app-toy-description',
    templateUrl: './toy-description.component.html',
    styleUrls: ['./toy-description.component.css'],
    standalone: false
})
export class ToyDescriptionComponent implements OnInit {

  @Input() toy?: Toy;

  constructor(private route: ActivatedRoute, private localStorage: LoginService, private toyService: ToysServiceService, private userService: UserService) {}
  

  ngOnInit(): void {
    this.getToy();
  }

  getToy(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.toyService.getToyDetail(id)
    .subscribe(toy => {
      this.localStorage.saveData("ownerId", `${toy.user.id}`)
      this.toy = toy;
      console.log(toy);
    });
  }

  updateAvailability(): void {
    //requete put
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.toyService.updateToyAvailability(id)
    .subscribe(toy => {
      this.toy = toy;
      console.log(toy);
    });
  }

  addTransaction(): void {
    // requete post
    
    const ownerId: number = Number(this.localStorage.getData("ownerId"));
    const takerId = Number(this.localStorage.getData("userId"));
    const toyId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.addTransaction(takerId, toyId, ownerId)
    .subscribe(toy => {
      console.log(toy);
    });
  }

  
  async makeReservation(): Promise<void> {
    if (this.toy?.available === true){
      await this.updateAvailability();
    this.addTransaction();
    }
  }

}
