import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';

@Injectable()
export class CharactersService {
  private party: Character [] = [
    new Character('101', {name: 'susan', height: 14, alias: ['cindy', 'is0bel'] }, { bod: 6, ess: 6 }, 5, 3, 1, 4),
    new Character('202', {name: 'glory', height: 14, alias: ['gretal', 'your death'] }, { bod: 6, ess: 6 }, 5, 3, 1, 4)
  ];

  getRunners() {
    return this.party.slice();
  }

  loadRunners() {
    // pulls all charcters from database.
    // Puts runners into 'party' variable.
  }

  saveNewRunner(runner) {
    // From a form, saves a new runner to the database.
    // All runners are reloaded into private party variable for sake of resyncing.
  }

  clearRunners() {
    // In the event of a log out, Private party array is set to an empty array.
  }

  getOneRunner(id) {
    // Returns one data based on the ID.
    // Runner is loaded from this service.
  }

  patchOneRunner(runner) {
    // 'Runner' is patched to the database.
    // Loads single runner into this service from Database
  }

  loadOneRunner(id) {
    // grabs one runner from the backend.
    // Loads into private party array in this service.
  }
  constructor() { }

}
