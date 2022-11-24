import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ToysComponent } from './toys/toys.component';
import { ToyDescriptionComponent } from './toy-description/toy-description.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsernavComponent } from './usernav/usernav.component';
import { UserService } from './Users-service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserAnnoucementComponent } from './user-annoucement/user-annoucement.component';
import { UserToysComponent } from './user-toys/user-toys.component';
import { httpInterceptorsProviders } from './interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ToysComponent,
    ToyDescriptionComponent,
    UserInfosComponent,
    UserRequestsComponent,
    UserReservationsComponent,
    LoginComponent,
    SignupComponent,
    UsernavComponent,
    UserAnnoucementComponent,
    UserToysComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UserService, httpInterceptorsProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
