import { Component, OnInit, Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.css']
})
export class DeployComponent implements OnInit {

  private data;

  constructor(private http:Http) { }

  ngOnInit() {
    this.getDeploys();
  }

  getDeploys(){
    this.http.get('http://localhost/proyectos/ControlDespliege/backend/api/deploy/getDeploy.php')
    .subscribe(res=>this.data = res.json());
  }

}
