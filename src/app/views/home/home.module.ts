import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    HomeComponent
  ],
  providers: [],
})

export class HomeModule { }
