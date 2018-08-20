import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faCoffee, faAngry } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faAngry);

@NgModule({
  exports: [FontAwesomeModule]
})
export class IconsModule { }
