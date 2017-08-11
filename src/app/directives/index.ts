import { NgModule } from '@angular/core';

import { InputDirective } from './input/input.directive';

@NgModule({
  declarations: [
    InputDirective
  ],
  exports: [
    InputDirective
  ]
})
export class DirectivesModule {}
