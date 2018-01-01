/*
    Will handle Authentication
    Will Trigger a "load" of all characters and "user" data from backend
    Will Communicate with characters and logins service to that end
*/
import { Injectable } from '@angular/core';
import { CharactersService } from './characters.service';
import { UsersService } from './users.service';

@Injectable()
export class LoginService {
    token: String = null; // Holds whatever the current auth token is. Default is 'null'

    constructor(
        private characters: CharactersService,
        private users: UsersService
    ) {
    }

    addUser(credentials) {
        /*
            Sends a {username, password } object back to the database.
            Sets the token.
            Loads a user object into the user service.
        */
    }

    loginUser(credentials) {
        /*
            sends {username,passsword} to back end.
            Stores authentication token here.
            Loads user into the user interface.
            If login is succesful, runs a load of all characters.
        */
    }

    logOutUser() {
        /*
            Runs a save off all characters.
            Clears Authentication token.
            Clears user variable.
        */
    }

    getToken() {
        // Returns the Token if it is ever needed for some reason.
        return this.token.slice();
    }

}
