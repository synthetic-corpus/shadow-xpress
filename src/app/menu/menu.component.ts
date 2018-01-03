import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private usersService: UsersService ) { }

  ngOnInit() {
  }

}
