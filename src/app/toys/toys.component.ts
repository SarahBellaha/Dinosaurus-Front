import { Component, inject, OnInit } from '@angular/core';
import { Toy } from '../Interfaces/Toy';
import { ToysService } from '../service/toys.service';
import { TEXT } from 'src/shared/constants';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css'],
  standalone: false,
})
export class ToysComponent implements OnInit {
  toys: Toy[] = [];
  filteredToys: Toy[] = [];
  inputValue: string = '';

  private readonly toyService: ToysService = inject(ToysService);
  readonly TEXT = TEXT;

  ngOnInit(): void {
    this.getToys();
  }

  getToys(): void {
    this.toyService.getToys().subscribe((toys) => {
      this.toys = toys;
      console.log(toys);
    });
  }

  filteredList() {
    if (this.inputValue != '') {
      this.toys = this.toys.filter((toy) =>
        toy.name.startsWith(this.inputValue)
      );
    } else {
      this.getToys();
    }
  }
}
