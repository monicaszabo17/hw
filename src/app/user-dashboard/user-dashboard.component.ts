import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserslistService } from 'src/app/userslist.service';




@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],

})

export class UserDashboardComponent implements OnInit {

  user:any;
  firstName:string;
  lastName:string;
  constructor( private userslistService: UserslistService) {  
  this.user = this.userslistService.getUser();
  this.firstName = this.user.firstName;
  this.lastName = this.user.lastName;
}



  ngOnInit(): void { };
  


}