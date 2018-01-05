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
    // Extracts the document from the server's reply
    extractDocument(response) {
        return response.json().quality;
    }
    addQuality(qualityObject) {
        this.http.post('http://localhost:3000/qualities/new', qualityObject)
            .subscribe(
                (response) => {
                    const document = this.extractDocument(response);
                    console.log(document);
                },
                (err) => {
                    console.log(err);
                });
    }
}
