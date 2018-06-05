import { Component, OnInit } from '@angular/core';
import { Login } from './models/Login';
import {FormsModule} from '@angular/forms';
import {LoginService} from './services/login.service';
import { User } from '../join/models/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login= new Login;
  user = new User;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.loginService.loginCheck(this.login).subscribe((user:User)=>{
      this.user=user;
    });


  }
}
