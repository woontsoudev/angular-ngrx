import { NgModule } from '@angular/core';

import { UiLibraryRoutingModule } from './ui-library-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UiLibraryComponent } from './ui-library.component';
import { UiBaseComponent } from './components/ui-base/ui-base.component';
import { UiInteractionComponent } from './components/ui-interaction/ui-interaction.component';
import { UiTablesComponent } from './components/ui-tables/ui-tables.component';
import { UiFormsComponent } from './components/ui-forms/ui-forms.component';

@NgModule({
  imports: [UiLibraryRoutingModule, SharedModule],
  exports: [],
  declarations: [
    UiLibraryComponent,
    UiBaseComponent,
    UiInteractionComponent,
    UiTablesComponent,
    UiFormsComponent
  ],
  providers: []
})
export class UiLibraryModule {}
