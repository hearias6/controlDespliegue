import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class personService {
  constructor(private http:Http) {  }

  // personas.
  getPersons(){
    return this.http.get('http://localhost/proyectos/ControlDespliege/backend/api/person/getPerson.php')
           .map((res:Response)=>res.json());
  }

}
