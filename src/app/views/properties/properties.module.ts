import { NgModule } from '@angular/core';

import { PropertiesRoutingModule } from './properties-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PropertiesComponent } from './properties.component';
import { UnitsComponent } from './components/units/units.component';

@NgModule({
  imports: [PropertiesRoutingModule, SharedModule],
  exports: [],
  declarations: [PropertiesComponent, UnitsComponent],
  providers: []
})
export class PropertiesModule {}
