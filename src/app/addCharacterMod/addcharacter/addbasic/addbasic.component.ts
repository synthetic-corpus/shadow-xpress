import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addbasic',
  templateUrl: './addbasic.component.html',
  styleUrls: ['./addbasic.component.css']
})
export class AddBasicComponent implements OnInit {
  metas = ['human', 'dwarf', 'elf', 'troll', 'ork' ];
  genders = ['male', 'female', 'trans', 'non-binary' ];

  basicform: FormGroup;
  constructor() { }

  ngOnInit() {
    this.basicform = new FormGroup({
      'name': new FormControl(null),
      'metatype': new FormControl(null),
      'gender': new FormControl(null),
      'height': new FormControl(null),
      'weight': new FormControl(null),
    });
  }

}
