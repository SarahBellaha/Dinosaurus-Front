import { Component } from '@angular/core';
import { ANNOUNCEMENT } from 'src/shared/constants';

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css'],
  standalone: false,
})
export class UsernavComponent {
  readonly ANNOUNCEMENT = ANNOUNCEMENT;
}
