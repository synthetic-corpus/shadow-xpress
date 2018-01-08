import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBasicComponent } from './addcharacter/addbasic/addbasic.component';
import { AddMetaComponent } from './addcharacter/add-meta/add-meta.component';
import { SpendPointsComponent } from './addcharacter/spend-points/spend-points.component';
import { AddQualitiesComponent } from './addcharacter/add-qualities/add-qualities.component';
import { AddcharacterComponent } from './addcharacter/addcharacter.component';

@NgModule({
    declarations: [
        AddBasicComponent,
        AddMetaComponent,
        SpendPointsComponent,
        AddQualitiesComponent,
        AddcharacterComponent
        ],
    imports: [
        CommonModule
    ],
    providers: [],
})
export class AddCharacterModule { }
