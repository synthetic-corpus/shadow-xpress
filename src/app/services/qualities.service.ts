import { Injectable } from '@angular/core';
import { Quality } from '../models/quality.model';
import { Http } from '@angular/http';

@Injectable()
export class QualityService {
    // Entire Quality database will be loaded into this service.
    // That should work, right?
    allQualities: Quality[];
    constructor(
        private quality: Quality,
        private http: Http,
    ) {
    }
    addQuality(qualityObject){
        const newQuality = new Quality(qualityObject.name, qualityObject.description, qualityObject.cost);
        this.allQualities.push(newQuality);
        console.log(this.allQualities);
    }
}
