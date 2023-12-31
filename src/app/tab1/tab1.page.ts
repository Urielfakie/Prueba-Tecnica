import { Component, OnInit } from '@angular/core';
import { ServerdbService } from '../services/serverdb';
import { Router } from '@angular/router';
import { AuthService } from '../services/authService';
import {  UserData } from '../services/userClass';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
name: string = "";
lastname: string = "";
toggleChecked: boolean = false;
  constructor(
    private serverdbService: ServerdbService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.serverdbService.getLoggedinUserData().then((data)=>{
      this.name = data.name;
      this.lastname = data.lastName;
    });
  }
  goFormDataUser(){
    this.router.navigate(['form-data-user']);
  }
}
