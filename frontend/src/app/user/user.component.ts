import {Http, Response} from '@angular/http';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // almacenara todo el recurso de usuarios.
  private data;

  constructor(private http:Http) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get('http://localhost/proyectos/ControlDespliege/backend/api/user/getUser.php')
        .subscribe(res => this.data = res.json());
  }

}
