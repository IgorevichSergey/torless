import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CafeteriaDetailsRoutingModule } from './cafeteria-details-routing.module';
import { CafeteriaDetailsComponent } from './cafeteria-details.component';

import { DirectivesModule } from '../directives';
import { ComponentsModule } from '../components';




@NgModule({
  imports: [
    CommonModule,
    CafeteriaDetailsRoutingModule,
    FormsModule,
    DirectivesModule,
    ComponentsModule
  ],
  declarations: [
    CafeteriaDetailsComponent
  ]
})
export class CafeteriaDetailsModule { }
