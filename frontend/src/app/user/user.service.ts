import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Rx';

import {User} from './user.class';

@Injectable()
export class userService {

  private data;

  constructor(private http:Http) {  }

  getUsers() {
      return this.http.get('http://localhost/proyectos/ControlDespliege/backend/api/user/getUser.php')
      .map((res:Response) => res.json());
  };
  

}
