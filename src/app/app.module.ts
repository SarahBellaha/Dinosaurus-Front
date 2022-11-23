import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ToysComponent } from './toys/toys.component';
import { ToyDescriptionComponent } from './toy-description/toy-description.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsernavComponent } from './usernav/usernav.component';
import { UserServiceService } from './service/user-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ToysComponent,
    ToyDescriptionComponent,
    UserprofileComponent,
    UserInfosComponent,
    UserRequestsComponent,
    UserReservationsComponent,
    LoginComponent,
    SignupComponent,
    UsernavComponent,
    UserInfosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
