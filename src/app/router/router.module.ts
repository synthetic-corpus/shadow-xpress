import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { HomeComponent } from '../home/home.component';
import { CharacterDisplayComponent } from '../characterInfo/character-display/character-display.component';
import { AddCharacterModule } from '../addCharacterMod/addCharacter.module';

// Routes from child modules
import { CharRouterModule } from '../addCharacterMod/addCharRouter.module';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'characters', component: CharacterDisplayComponent },
  {path: 'user', component: UserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }
