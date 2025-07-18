import { Component } from '@angular/core';
import { TEXT } from 'src/shared/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: false,
})
export class FooterComponent {
  TEXT = TEXT
}
