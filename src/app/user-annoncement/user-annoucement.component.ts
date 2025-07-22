import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Toy } from '../Interfaces/Toy';
import { LoginService } from '../service/login.service';
import { ToysService } from '../service/toys.service';
import { ANNOUNCEMENT, ERRORS } from 'src/shared/constants';

@Component({
  selector: 'app-user-announcement',
  templateUrl: './user-announcement.component.html',
  styleUrls: ['./user-announcement.component.css'],
  standalone: false,
})
export class UserAnnouncementComponent {
  readonly toy!: Toy;
  private readonly router: Router = inject(Router);
  private readonly toyService: ToysService = inject(ToysService);
  private readonly localStorage: LoginService = inject(LoginService);

  readonly ANNOUNCEMENT = ANNOUNCEMENT;
  readonly ERRORS = ERRORS;
  gotoHome() {
    this.router.navigateByUrl('/home');
  }
  gotoToyList() {
    this.router.navigateByUrl('/useraccount/toys');
  }
  onSubmit() {
    const id = Number(this.localStorage.getData('userId'));
    this.toyService.saveToy(this.toy, id).subscribe(() => this.gotoToyList());
  }
}
