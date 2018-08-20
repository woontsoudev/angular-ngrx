import { NgModule } from '@angular/core';

import { UiLibraryRoutingModule } from './ui-library-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UiLibraryComponent } from './ui-library.component';

@NgModule({
  imports: [
    UiLibraryRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    UiLibraryComponent
  ],
  providers: [],
})

export class UiLibraryModule { }
