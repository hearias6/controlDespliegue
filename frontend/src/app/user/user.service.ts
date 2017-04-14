import {Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class userService {

  constructor(private http:Http) {  }
  /*
  getUser(){
    return this.http
      .get('http://localhost/proyectos/ControlDespliege/backend/api/user/getUser.php')
      .map((res: Response) => res.json());
  }
  */

}
