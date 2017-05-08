import { Component, OnInit } from '@angular/core';
import {personService} from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers:[personService]
})
export class PersonComponent implements OnInit {

  constructor(private personService: personService) { }

  private data;

  ngOnInit() {
    this.getPersons();
  }

  public getPersons(){
    this.personService.getPersons()
    .subscribe(res=>this.data=res);
  }

}
