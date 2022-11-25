import { Component, OnInit } from '@angular/core';
import { Toy } from '../Interfaces/Toy';
import { ToysServiceService } from '../Toys-Service/toys-service.service';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

  toys: Toy[] = [];
  filteredToys: Toy[] = [];
  inputValue: string = "";

  constructor(private toyService: ToysServiceService) { }

  ngOnInit(): void {
    this.getToys();
  }

  getToys(): void {
    this.toyService.getToys()
    .subscribe(toys => {
      this.toys = toys;
      console.log(toys);
    });
  }

  filteredList(){
    if(this.inputValue != "") {
      this.toys = this.toys.filter(toy => toy.name.startsWith(this.inputValue));
    } else {
      this.getToys();
    }
    
  }

}
