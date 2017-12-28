import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';

@Injectable()
export class CharactersService {
  runTest() {
    const candid = new Character({ name: 'susan', height: 14, alias: ['cindy', 'is0bel'] }, { bod: 6, ess: 6 }, 5, 3, 1, 4);
    console.log(candid);
  }
  constructor() { }

}
