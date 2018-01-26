import { Injectable } from '@angular/core';
import { ObjectID } from 'mongodb';
import { User } from '../models/user.model';
import { Http, RequestOptions, Headers } from '@angular/http';
import { } from '@angular/http';

@Injectable()
export class UsersService {
  // May not be a reason to keep this private?
  private user: User;
  constructor(private http: Http) { }

  /*reqOpts = new RequestOptions({
    headers: new Headers({
      'Access-Control-Allow-Origin': 'localhost:3000'
    })
  });*/

  testRoute() {
    this.http.post('http://localhost:3000/users', {'email': 'you@google.net', 'password': '&&88oPdCC23!'})
      .subscribe((res) => { console.log(res); });
  }

  saveUser(user) {
    // Saves a this.user into the database.
  }

  getUser(user) {
    // using user.id, loads one user by the object ID.
  }

  patchUser(user) {
    // Using user.id, patches the user in the back end.
  }

  displayUser() {
    // returns the current loaded user.
    // uses lodash to omit sensitive info.
    if (!this.user) {
      return null;
    }
    return this.user;
  }

}
