import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CreateBranchRoutingModule } from './create-branch-routing.module';
import { CreateBranchComponent } from './create-branch.component';

import { DirectivesModule } from '../directives';




@NgModule({
  imports: [
    CommonModule,
    CreateBranchRoutingModule,
    FormsModule,
    DirectivesModule
  ],
  declarations: [
    CreateBranchComponent
  ]
})
export class CreateBranchModule { }
