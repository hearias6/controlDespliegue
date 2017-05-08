//import {Http, Response} from '@angular/http';
import { Component, OnInit, Injectable } from '@angular/core';
import {userService} from './user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[userService]
})
export class UserComponent implements OnInit {

  // almacenara todo el recurso de usuarios.
  private data;

  constructor(private userService: userService) {  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe(result=>this.data=result);
  }

}
