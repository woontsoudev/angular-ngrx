import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResidentsComponent } from './residents.component';

const routes: Routes = [
  {
    path: '',
    component: ResidentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ResidentsRoutingModule { }
