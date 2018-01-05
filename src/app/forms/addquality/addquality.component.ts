import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addquality',
  templateUrl: './addquality.component.html',
  styleUrls: ['./addquality.component.css']
})
export class AddqualityComponent implements OnInit {
  addQualityForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.addQualityForm = new FormGroup({
      'name': new FormControl('Insert a name here', Validators.required),
      'description': new FormControl(null, Validators.required),
      'cost': new FormControl(0, Validators.required)
    });
  }

}
