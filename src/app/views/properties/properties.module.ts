import { NgModule } from '@angular/core';

import { PropertiesRoutingModule } from './properties-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PropertiesComponent } from './properties.component';

@NgModule({
  imports: [
    PropertiesRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    PropertiesComponent
  ],
  providers: [],
})

export class PropertiesModule { }
