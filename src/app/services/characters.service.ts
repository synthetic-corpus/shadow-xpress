import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';

@Injectable()
export class CharactersService {
  runTest() {
    const candid = new Character({ name: 'susan', height: 14 }, { bod: 6 }, 5, 3);
    console.log(candid);
  }
  constructor() { }

}
