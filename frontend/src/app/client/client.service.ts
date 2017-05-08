import { Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class clientService {
  constructor(private http: Http) {  }

  getClients(){
    return this.http.get('http://localhost/proyectos/ControlDespliege/backend/api/client/getClient.php').
    map((res:Response)=>res.json());
  };

}
