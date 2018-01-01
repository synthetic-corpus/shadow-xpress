import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent implements OnInit {
  charactersArray = [];
  constructor(private characters: CharactersService ) { }

  ngOnInit() {
    this.charactersArray = this.characters.getRunners();
    console.log(this.charactersArray);
  }

}
