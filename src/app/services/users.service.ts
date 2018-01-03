import { Injectable } from '@angular/core';
import { ObjectID } from 'mongodb';
import { User } from '../models/user.model';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {
  // May not be a reason to keep this private?
  private user: User;
  constructor(private http: Http) { }

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
