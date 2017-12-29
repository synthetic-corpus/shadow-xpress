import { Injectable } from '@angular/core';
import { ObjectID } from 'mongodb';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  runtest() {
    const me = new User(
      'John Doe',
      'Hello@yahoo.net'
    );
    console.log(me);
  }
  constructor() { }

}
