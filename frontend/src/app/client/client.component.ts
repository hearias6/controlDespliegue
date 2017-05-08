import { Component, OnInit } from '@angular/core';

import {clientService} from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers:[clientService]
})
export class ClientComponent implements OnInit {

  private data;

  constructor(private clientService: clientService) { }

  ngOnInit() {
    this.getClients();
  }

  public getClients(){
    this.clientService.getClients()
    .subscribe(result=>this.data=result);
  }

}
