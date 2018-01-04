import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcharacter',
  templateUrl: './addcharacter.component.html',
  styleUrls: ['./addcharacter.component.css']
})
export class AddcharacterComponent implements OnInit {
  metatypes = [ 'Human', 'Orc', 'Elf', 'Dwarf', 'Troll' ];
  genders = ['male', 'female', 'non-binary' ];

  constructor() { }

  ngOnInit() {
  }

}
