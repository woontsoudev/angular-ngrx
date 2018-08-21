import { NgModule } from '@angular/core';

import { ResidentsRoutingModule } from './residents-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ResidentsComponent } from './residents.component';

@NgModule({
  imports: [
    ResidentsRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    ResidentsComponent
  ],
  providers: [],
})

export class ResidentsModule { }
