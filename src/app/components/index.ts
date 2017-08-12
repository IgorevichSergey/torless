import { InformationComponent } from './information/information.component';
import { PathComponent } from './path/path.component';
import { UserImageComponent } from './user-image/user-image.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

export { InformationComponent, PathComponent, UserImageComponent, ProgressBarComponent };

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { InformationComponent } from './information/information.component';
// import { PathComponent } from './path/path.component';
// import { UserImageComponent } from './user-image/user-image.component';
// import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InformationComponent,
    PathComponent,
    UserImageComponent,
    ProgressBarComponent,
  ],
  exports: [
    InformationComponent,
    PathComponent,
    UserImageComponent,
    ProgressBarComponent
  ]
})
export class ComponentsModule {}
