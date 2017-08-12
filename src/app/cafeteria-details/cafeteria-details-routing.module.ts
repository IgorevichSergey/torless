import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENT
import { CafeteriaDetailsComponent } from './cafeteria-details.component';

const routes: Routes = [
  { path: 'cafeteria-details', component: CafeteriaDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeteriaDetailsRoutingModule { }
