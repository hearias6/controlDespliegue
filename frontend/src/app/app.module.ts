import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRouting} from './app.route';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PersonComponent } from './person/person.component';
import { DeployComponent } from './deploy/deploy.component';
import { ClientComponent } from './client/client.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PersonComponent,
    DeployComponent,
    ClientComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
