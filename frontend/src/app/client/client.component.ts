import { Component, OnInit, Injectable } from '@angular/core';

import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  private data;

  constructor(private http:Http) { }

  ngOnInit() {
    this.getClients();
  }

  public getClients(){
    this.http.get('http://localhost/proyectos/ControlDespliege/backend/api/client/getClient.php')
        .subscribe(res=>this.data = res.json());
  }

}
