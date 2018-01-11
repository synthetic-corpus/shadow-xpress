import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddBasicComponent } from './addcharacter/addbasic/addbasic.component';
import { AddMetaComponent } from './addcharacter/add-meta/add-meta.component';
import { SpendPointsComponent } from './addcharacter/spend-points/spend-points.component';
import { AddcharacterComponent } from './addcharacter/addcharacter.component';
import { ReactiveFormsModule } from '@angular/forms';

const charRoutes: Routes = [
    { path: 'newrunner', component: AddcharacterComponent, children: [
        {path: 'basic', component: AddBasicComponent },
        {path: 'meta', component: AddMetaComponent },
        {path: 'spend', component: SpendPointsComponent }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(charRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CharRouterModule { }
