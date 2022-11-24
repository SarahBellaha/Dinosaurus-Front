import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ToyDescriptionComponent } from './toy-description/toy-description.component';
import { ToysComponent } from './toys/toys.component';
import { UserAnnoucementComponent } from './user-annoucement/user-annoucement.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';
import { UserToysComponent } from './user-toys/user-toys.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'toys', component: ToysComponent },
  { path: 'toys/:id', component: ToyDescriptionComponent },
  { path: 'useraccount/informations', component: UserInfosComponent },
  { path: 'useraccount/requests', component: UserRequestsComponent },
  { path: 'useraccount/reservations', component: UserReservationsComponent },
  { path: 'useraccount/toys', component: UserToysComponent },
  { path: 'useraccount/post-toys', component: UserAnnoucementComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserInfosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
