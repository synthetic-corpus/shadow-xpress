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
  constructor() { }

}
