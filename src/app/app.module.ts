import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserslistService } from './userslist.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    AppHeaderComponent,
    SigninFormComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
