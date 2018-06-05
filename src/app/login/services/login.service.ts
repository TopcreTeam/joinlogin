import { Injectable } from '@angular/core';
import {HttpClientModule,HttpHeaders, HttpClient} from '@angular/common/http';
import {Login} from '../models/Login';
@Injectable()
export class LoginService {

  constructor(private http:HttpClient) { }
  private loginUrl = 'http://localhost:8080/toma/login/';

  loginCheck(login:Login){
    return this.http.post(this.loginUrl,login);
  }



}
