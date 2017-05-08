import { Component, OnInit } from '@angular/core';
import {deployService} from './deploy.service';

@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.css'],
  providers:[deployService]
})
export class DeployComponent implements OnInit {

  private data;

  constructor(private deployService:deployService) { }

  ngOnInit() {
    this.getDeploys();
  }

  getDeploys(){
    this.deployService.getDeploys()
    .subscribe(res=>this.data=res);
  }

}
