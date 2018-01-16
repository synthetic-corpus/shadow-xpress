import { Injectable } from '@angular/core';
import { CreationVariables } from './creationvariables.service';
import { PriorityTable } from './priority.service';

@Injectable()
export class DeliverPayload {
    metatype;
    constructor(
        private creationObject: CreationVariables,
        private myTable: PriorityTable
    ) {
      this.metatype = creationObject.character.basic.metatype;
    }

/*
    Functions below deliver the data.
    A function is called from the meta component.
    Delivers all the data from what is expected to be the same instance
    of the creation variables and priority table.
*/
    deliverPayload(row, box) {
        if (box === 'meta') {
          // run special function for meta box.
          this.deliverMeta(row);
        }else if (box === 'attributes') {
          // run attributes
          this.deliverAttr(row);
        }else if (box === 'magres') {
          // magres function
          console.log('magres');
        }else if (box === 'skills') {
          // skills function, which I don't hink I even have yet
          console.log('skills');
        }else if (box === 'nuyen') {
          // easy one here. Append the money!
          this.deliverNuyen(row);
        }
      }

      deliverMeta(row) {
        const specialpoints = this.myTable[row]['meta']['payload'][this.metatype];
        this.creationObject.creation.specialpoints = specialpoints;
      }

      deliverAttr(row) {
        const attrpoints = this.myTable[row]['attributes']['payload'];
        this.creationObject.creation.attributepoints = attrpoints;
      }

      deliverNuyen(row) {
        const money = this.myTable[row]['nuyen'];
        this.creationObject.character.resources = money;
      }

      deliverMagres(row) {
        console.log('magres');
      }

      deliverSkills(row) {
        console.log('skills');
      }
}
