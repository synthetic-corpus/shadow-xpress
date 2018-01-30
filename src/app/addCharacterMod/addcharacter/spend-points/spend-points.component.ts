import { Component, OnInit } from '@angular/core';
import { PriorityTable } from '../../services/priority.service';
import { CreationVariables } from '../../services/creationvariables.service';

@Component({
  selector: 'app-spend-points',
  templateUrl: './spend-points.component.html',
  styleUrls: ['./spend-points.component.css', '../addcharacter.component.css']
})
export class SpendPointsComponent implements OnInit {
  metatype;
  maxStats;
  startStats;
  constructor(
    private pTable: PriorityTable,
    private creationObject: CreationVariables
  ) { }

  ngOnInit() {
    // A function that will intialize the max and min of
    this.metatype = this.creationObject.character.basic.metatype;
    this.maxStats = this.creationObject.statics.maxattributes[this.metatype];
    this.startStats = this.creationObject.statics.baseattributes[this.metatype];
    // Apply the start stats to the Creation Object
    const statKeys = Object.keys(this.startStats);
    for (let key of statKeys ){
      this.creationObject.character.attributes[key] = this.startStats[key];
      this.creationObject.character.max[key] = this.maxStats[key];
    }
  }

}
