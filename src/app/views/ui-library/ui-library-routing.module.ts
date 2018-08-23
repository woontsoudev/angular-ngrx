import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UiLibraryComponent } from './ui-library.component';
import { UiBaseComponent } from './components/ui-base/ui-base.component';
import { UiInteractionComponent } from './components/ui-interaction/ui-interaction.component';

const routes: Routes = [
  {
    path: '',
    component: UiLibraryComponent,
    children: [
      { path: 'base', component: UiBaseComponent },
      { path: 'interaction', component: UiInteractionComponent }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UiLibraryRoutingModule { }
