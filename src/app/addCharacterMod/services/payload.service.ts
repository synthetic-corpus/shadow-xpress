import { Injectable } from '@angular/core';
import { CreationVariables } from './creationvariables.service';
import { PriorityTable } from './priority.service';

@Injectable()
export class DeliverPayload {
    metatype;
    myTable;
    myMagres;
    constructor(
        private creationObject: CreationVariables,
        private pTable: PriorityTable
    ) {
      this.myTable = pTable.getTable();
      this.metatype = creationObject.character.basic.metatype;
      this.myMagres = pTable.getMagres();
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
          this.deliverMagres(row);
        }else if (box === 'skills') {
          // skills function, which I don't hink I even have yet
          this.deliverSkills(row);
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
        const money = this.myTable[row]['nuyen']['payload'];
        this.creationObject.character.resources = money;
      }

      deliverMagres(row) {
        const concept = this.creationObject.character.basic.concept;
        const magres = this.myMagres[row][concept];
        this.creationObject.character.attributes.mag = magres.mag;
        this.creationObject.character.attributes.res = magres.res;
      }

      deliverSkills(row) {
        // If else cause simple used for error proofing.
        const skills = this.myTable[row]['skills']['payload'];
        if (skills) {
          this.creationObject.creation.skillpoints = skills.single;
          this.creationObject.creation.grouppoints = skills.group;
        }else {
          this.creationObject.creation.skillpoints = 0;
          this.creationObject.creation.grouppoints = 0;
        }
      }
}
