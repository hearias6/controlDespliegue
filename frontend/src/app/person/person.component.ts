import { Component, OnInit, Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private http: Http) { }

  private data;

  ngOnInit() {
    this.getPersons();
  }

  public getPersons(){
    this.http.get('http://localhost/proyectos/ControlDespliege/backend/api/person/getPerson.php')
        .subscribe(res=> this.data = res.json());
  }

}
