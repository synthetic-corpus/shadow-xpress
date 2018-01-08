import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Custom Modules
import { AddCharacterModule } from './addCharacterMod/addCharacter.module';

import { AppComponent } from './app.component';
import { CharacterComponent } from './characterInfo/character/character.component';
import { MenuComponent } from './menu/menu.component';
import { AdduserComponent } from './forms/adduser/adduser.component';
import { AddcharacterComponent } from './forms/addcharacter/addcharacter.component';

import { CharactersService } from './services/characters.service';
import { UsersService } from './services/users.service';
import { QualityService } from './services/qualities.service';

import { UserComponent } from './user/user.component';
import { AppRouterModule } from './router/router.module';
import { CharacterDisplayComponent } from './characterInfo/character-display/character-display.component';
import { CharacterTileComponent } from './characterInfo/character-display/character-tile/character-tile.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddqualityComponent } from './forms/addquality/addquality.component';

// Models
// import { Quality } from './models/quality.model';
@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    MenuComponent,
    AdduserComponent,
    AddcharacterComponent,
    UserComponent,
    CharacterDisplayComponent,
    CharacterTileComponent,
    HomeComponent,
    AddqualityComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AddCharacterModule
  ],
  providers: [
    CharactersService,
    UsersService,
    QualityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
