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

    documentToQuality(document) {
        return new Quality(
            document.name,
            document.description,
            document.cost,
            document._id,
            document.beneficial
        );
    }

    addQuality(qualityObject) {
        this.http.post('http://localhost:3000/qualities/new', qualityObject)
            .subscribe(
                (response) => {
                    const document = this.extractDocument(response);
                    this.loadQualities();
                },
                (err) => {
                    console.log(err);
                });
    }
    
    // Loads all the qualities from the databases, and puts them into this services' array
    loadQualities() {
        this.http.get('http://localhost:3000/qualities/getall')
            .subscribe(
                (response) => {
                    if (response.json()) {
                        this.allQualities = [];
                    }
                    const array = response.json();
                    array.forEach((document) => {
                        const quality = this.documentToQuality(document);
                        this.allQualities.push(quality);
                    });
                },
                (err) => {
                    console.log(err.json());
                }
            );
    }
}
