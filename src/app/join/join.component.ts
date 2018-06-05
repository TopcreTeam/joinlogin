import { Component, OnInit } from '@angular/core';
import { JoinService } from './services/join.service';
import { User } from './models/User';
import { Location } from '@angular/common';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  user = new User;
  constructor(private joinService: JoinService) {
    this.user.uaddr2='n';
    this.user.uaddr3='n';
    this.user.uaddrcheck=1;
  //  this.user.ujoindate='0000-00-00';
  }
// private joinService : JoinService
  ngOnInit() {
  }

  onSubmit(){
    this.joinService.addUser(this.user).subscribe((user:User)=>{
      this.user=user;
    });
  }
}
