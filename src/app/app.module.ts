import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { MenuComponent } from './menu/menu.component';
import { AdduserComponent } from './forms/adduser/adduser.component';
import { AddcharacterComponent } from './forms/addcharacter/addcharacter.component';

import { CharactersService } from './services/characters.service';
import { UsersService } from './services/users.service';
import { UserComponent } from './user/user.component';
import { AppRouterModule } from './router/router.module';


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    MenuComponent,
    AdduserComponent,
    AddcharacterComponent,
    UserComponent
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
