import { Injectable } from '@angular/core';
import { Quality } from '../models/quality.model';
import { Http } from '@angular/http';

@Injectable()
export class QualityService {
    // Entire Quality database will be loaded into this service.
    // That should work, right?
    
    newQuality: Quality;
    private allQualities: Quality[] = [];
    
    constructor(
        private http: Http
    ) {
    }
    
    addQuality(qualityObject) {
        this.newQuality = new Quality(qualityObject.name, qualityObject.description, qualityObject.cost);
        this.allQualities.push(this.newQuality);
        console.log(this.allQualities);
    }
}
