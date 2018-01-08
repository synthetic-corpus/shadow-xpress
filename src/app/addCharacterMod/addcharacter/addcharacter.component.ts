import { Component, OnInit } from '@angular/core';
import { PriorityTable } from '../services/priority.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-addcharacter',
  templateUrl: './addcharacter.component.html',
  styleUrls: ['./addcharacter.component.css'],
  providers: [PriorityTable]
})
export class AddcharacterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
