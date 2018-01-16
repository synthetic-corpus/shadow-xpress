import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreationVariables } from '../../services/creationvariables.service';

@Component({
  selector: 'app-addbasic',
  templateUrl: './addbasic.component.html',
  styleUrls: ['./addbasic.component.css', '../addcharacter.component.css']
})
export class AddBasicComponent implements OnInit {
  metas = ['human', 'dwarf', 'elf', 'troll', 'ork' ];
  genders = ['male', 'female', 'trans', 'non-binary' ];
  magicconcepts = ['none', 'mystic', 'technomancer', 'adept', 'aspected'];
  // Will need a different "display" for magic names.
  // Will create an addition object. I love Objects.
  
  basicform: FormGroup;
  constructor(
    private creationObject: CreationVariables
  ) { }

  ngOnInit() {
    this.basicform = new FormGroup({
      'name': new FormControl(null),
      'metatype': new FormControl('human'),
      'gender': new FormControl(null),
      'height': new FormControl(null),
      'weight': new FormControl(null),
      'magicconcept': new FormControl('none'),
      'age': new FormControl(null)
    });
  }

}
