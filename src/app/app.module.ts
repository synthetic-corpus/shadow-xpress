import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { MenuComponent } from './menu/menu.component';
import { AdduserComponent } from './forms/adduser/adduser.component';
import { AddcharacterComponent } from './forms/addcharacter/addcharacter.component';



@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    MenuComponent,
    AdduserComponent,
    AddcharacterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
