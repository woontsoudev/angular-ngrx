import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UiLibraryComponent } from './ui-library.component';

const routes: Routes = [
  {
    path: '',
    component: UiLibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UiLibraryRoutingModule { }
