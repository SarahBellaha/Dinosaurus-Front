import { Component } from '@angular/core';
import { TEXT } from 'src/shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent {
  TEXT = TEXT
}
