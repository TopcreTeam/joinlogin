import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { JoinComponent } from './join/join.component';
import { JoinService } from './join/services/join.service';
import { LoginService } from './login/services/login.service';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    JoinComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    JoinService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
