import { Component, OnInit } from '@angular/core';
import { PriorityTable } from '../../services/priority.service';
import { CreationVariables } from '../../services/creationvariables.service';
import { DeliverPayload } from '../../services/payload.service';

@Component({
  selector: 'app-add-meta',
  templateUrl: './add-meta.component.html',
  styleUrls: ['./add-meta.component.css', '../addcharacter.component.css']
})
export class AddMetaComponent implements OnInit {
  // Variables declared here in the contruction of the grid.
  myTable;
  rows;
  boxes;
  columns;
  metatype;

  constructor(
    private pTable: PriorityTable,
    private creationObject: CreationVariables,
    private payload: DeliverPayload ) { }

  ngOnInit() {
    this.myTable = this.pTable.getTable();
    this.getKeys(); // Gets keys of both boxes and rows for sake of easy iterations.
    this.metatype = this.creationObject.character.basic.metatype;
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
      // on deselection
      this.myTable[row][box]['selected'] = false;
      this.myTable.columns[box] = false;
     }else {
       // On selection...
      this.myTable[row][box]['selected'] = true;
      this.myTable.columns[box] = true;
      this.payload.deliverPayload(row, box);
      }
  }

  toggleBoth(row, box) {
    this.rowToggle(row);
    this.boxToggle(row, box);
  }


  // This works.
  gridCellCSS (row, box) {
    // const metatype = this.creationObject.character.basic.metatype;
    let metacell;
    if (this.metatype && box === 'meta') {
      metacell = this.myTable[row][box]['payload'][this.metatype];
    } else {
      metacell = '';
    }
    const metaBool = Boolean(metacell === null);
    const compoundBool = Boolean(metaBool || !this.myTable[row]['selectable'] || this.myTable.columns[box]);

    return {
      'unavailable': (compoundBool && !this.myTable[row][box]['selected']),
      'available': !metaBool && this.myTable[row]['selectable'] && !this.myTable.columns[box],
      'selected': this.myTable[row][box]['selected']
    };
  }
  // For eaiser construction in dom
  getKeys() {
    this.rows = Object.keys(this.myTable).splice(0, 5);
    this.boxes = Object.keys(this.myTable.a).splice(0, 5);
    this.columns = Object.keys(this.myTable.columns);
  }

}
