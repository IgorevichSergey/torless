import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { BranchActivityRoutingModule } from './branch-activity-routing.module';
import { BranchActivityComponent } from './branch-activity.component';

import { DirectivesModule } from '../directives';
import { ComponentsModule } from '../components';




@NgModule({
  imports: [
    CommonModule,
    BranchActivityRoutingModule,
    FormsModule,
    DirectivesModule,
    ComponentsModule
  ],
  declarations: [
    BranchActivityComponent
  ]
})
export class BranchActivityModule { }
