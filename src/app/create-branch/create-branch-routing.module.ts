import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENT
import { CreateBranchComponent } from './create-branch.component';

const routes: Routes = [
  { path: 'create-branch', component: CreateBranchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateBranchRoutingModule { }
