import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ToysComponent } from './toys/toys.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "toys", component: ToysComponent},
  {path: "toys", component: ToysComponent},
  {path: "useraccount", component: UserprofileComponent},
  {path: "signup", component: SignupComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
