import { Injectable } from '@angular/core';
import { User } from 'src/app/user';
import {  Router } from '@angular/router';
import { state } from '@angular/animations';



@Injectable({
  providedIn: 'root'
})

export class UserslistService {
 
 user:any;
 userJson:any;
  notRegistered = true;
 
  
  constructor(private router :Router) {  }

  
  
  getUser(){
    this.user = localStorage.getItem('user');
    this.userJson = JSON.parse(this.user);
    if(this.userJson != null){
      this.userJson = JSON.parse(this.user);
       return this.userJson;
    }
  }
  
  
  signedUser(user:User){
    if(localStorage.user){
    
    this.router.navigate(['/dashboard']);
    this.notRegistered = false;
    return localStorage.user.firstName;
    }
    this.router.navigate(['/signin']);
    return false;
 }

  
       
  }

  
  

