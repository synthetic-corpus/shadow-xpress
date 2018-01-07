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
  constructor(private pTable: PriorityTable ) { }

  ngOnInit() {
    this.myTable = this.pTable.getTable();
    console.log(this.myTable);
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
    }else {
      this.myTable[row][box]['selected'] = true;
    }
  }

  toggleBoth(row, box) {
    this.rowToggle(row);
    this.boxToggle(row, box);
  }

}
