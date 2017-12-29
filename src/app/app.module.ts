import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CharacterComponent } from './characterInfo/character/character.component';
import { MenuComponent } from './menu/menu.component';
import { AdduserComponent } from './forms/adduser/adduser.component';
import { AddcharacterComponent } from './forms/addcharacter/addcharacter.component';

import { CharactersService } from './services/characters.service';
import { UsersService } from './services/users.service';
import { UserComponent } from './user/user.component';
import { AppRouterModule } from './router/router.module';
import { CharacterDispalyComponent } from './characterInfo/character-display/character-display.component';
import { CharacterTileComponent } from './characterInfo/character-display/character-tile/character-tile.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    MenuComponent,
    AdduserComponent,
    AddcharacterComponent,
    UserComponent,
    CharacterDispalyComponent,
    CharacterTileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [
    CharactersService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
