
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { UserComponent } from './user/user.component';
import { PersonComponent } from './person/person.component';
import { DeployComponent } from './deploy/deploy.component';
import { ClientComponent } from './client/client.component';
import {AddUserComponent} from './add-user/add-user.component';

const routes: Routes = [
  {path:'', redirectTo:'/users', pathMatch: 'full'},
  {path:'users', component:UserComponent},
  {path:'persons', component:PersonComponent},
  {path:'clients', component:ClientComponent},
  {path:'deploys', component:DeployComponent},
  {path:'addUser', component:AddUserComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouting{}
