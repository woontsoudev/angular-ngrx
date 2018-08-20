import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './root-reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
      // logOnly: environment.production, // add when eviroments
    })
  ],
  exports: [
    StoreModule,
    StoreDevtoolsModule
  ],
  providers: []
})
export class RootStoreModule {}
