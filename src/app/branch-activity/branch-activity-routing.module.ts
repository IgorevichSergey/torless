import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENT
import { BranchActivityComponent } from './branch-activity.component';

const routes: Routes = [
  { path: 'branch-activity', component: BranchActivityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchActivityRoutingModule { }
