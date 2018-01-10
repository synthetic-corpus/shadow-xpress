import { Component, OnInit } from '@angular/core';
import { PriorityTable } from '../services/priority.service';
import { CreationVariables } from '../services/creationvariables.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-addcharacter',
  templateUrl: './addcharacter.component.html',
  styleUrls: ['./addcharacter.component.css'],
  providers: [PriorityTable, CreationVariables]
})
export class AddcharacterComponent implements OnInit {

  constructor(
    private creationObject: CreationVariables
  ) { }

  logVariables() {
    console.log(this.creationObject.creation);
  }

  logCharacter() {
    console.log(this.creationObject.character);
  }
  ngOnInit() {
  }

}
