import { Injectable } from '@angular/core';
import {HttpClientModule,HttpHeaders, HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import 'rxjs/add/operator/toPromise';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
@Injectable()
export class JoinService {


    constructor(private http: HttpClient) { }
    private joinUrl = 'http://localhost:8080/toma/join/';

    addUser(user : User) {
    return this.http.post(this.joinUrl,user);
    }

}
