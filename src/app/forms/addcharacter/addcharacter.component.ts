import { Component, OnInit } from '@angular/core';
import { PriorityTable } from '../../services/priority.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-addcharacter',
  templateUrl: './addcharacter.component.html',
  styleUrls: ['./addcharacter.component.css'],
  providers: [PriorityTable]
})
export class AddcharacterComponent implements OnInit {
  myTable;
  rows;
  boxes;
  columnsChecked = {
    meta: false,
    attributes: false,
    magres: false,
    nuyen: false,
    skills: false
  };

  constructor(private pTable: PriorityTable ) { }

  ngOnInit() {
    this.myTable = this.pTable.getTable();
    this.getKeys();
  }

  rowToggle(row) {
    // On a click on or off a box toggles the box.
    if (this.myTable[row]['selectable'] === true) {
      this.myTable[row]['selectable'] = false;
    }else {
      this.myTable[row]['selectable'] = true;
    }
  }

  boxToggle(row, box) {
    if (this.myTable[row][box]['selected'] === true) {
      this.myTable[row][box]['selected'] = false;
      this.columnsChecked[box] = false;
      console.log(this.columnsChecked[box]);
    }else {
      this.myTable[row][box]['selected'] = true;
      this.columnsChecked[box] = true;
      console.log(this.columnsChecked[box]);
    }
  }

  toggleBoth(row, box) {
    this.rowToggle(row);
    this.boxToggle(row, box);
  }
  // returns key value pairs that I 'hope' will work.
  gridCellCSS (row, box) {
    const firstBool = !this.myTable[row]['selectable'] && !this.myTable[row][box]['selected'];
    return {
      'unavailable': firstBool,
      'available': this.myTable[row]['selectable'] && !this.myTable[row][box]['selected'],
      'selected': this.myTable[row][box]['selected']
    };
  }
  // For eaiser construction in dom
  getKeys() {
    this.rows = Object.keys(this.myTable);
    this.boxes = Object.keys(this.myTable.a).splice(0, 5);
  }

}
