import { NgModule } from '@angular/core';

import { UiLibraryRoutingModule } from './ui-library-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UiLibraryComponent } from './ui-library.component';
import { UiBaseComponent } from './components/ui-base.component';
import { UiInteractionComponent } from './components/ui-interaction.component';

@NgModule({
  imports: [
    UiLibraryRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    UiLibraryComponent,
    UiBaseComponent,
    UiInteractionComponent
  ],
  providers: [],
})

export class UiLibraryModule { }
