import { NgModule } from '@angular/core';

import { UiLibraryRoutingModule } from './ui-library-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UiLibraryComponent } from './ui-library.component';
import { UiBaseComponent } from './components/ui-base/ui-base.component';
import { UiInteractionComponent } from './components/ui-interaction/ui-interaction.component';
import { UiTablesComponent } from './components/ui-tables/ui-tables.component';
import { UiFormsComponent } from './components/ui-forms/ui-forms.component';
import { UiComponentsComponent } from './components/ui-components/ui-components.component';
import { EditCarFormComponent } from './components/edit-car/edit-car-form.component';

@NgModule({
  imports: [UiLibraryRoutingModule, SharedModule],
  exports: [],
  declarations: [
    UiLibraryComponent,
    UiBaseComponent,
    UiInteractionComponent,
    UiTablesComponent,
    UiFormsComponent,
    UiComponentsComponent,
    EditCarFormComponent
  ],
  providers: []
})
export class UiLibraryModule {}
