import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class deployService {
  constructor(private http:Http) {  }

  getDeploys(){
    return this.http.get('http://localhost/proyectos/ControlDespliege/backend/api/deploy/getDeploy.php')
            .map((res:Response)=>res.json());
  }

}
