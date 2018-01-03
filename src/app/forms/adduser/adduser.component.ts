import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor() { }
  onSubmit() {
    console.log('clicky clicky!');
  }
  ngOnInit() {
  }

}
