import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UiLibraryComponent } from './ui-library.component';
import { UiBaseComponent } from './components/ui-base/ui-base.component';
import { UiInteractionComponent } from './components/ui-interaction/ui-interaction.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'library/base',
    pathMatch: 'full'
  },
  {
    path: 'library',
    component: UiLibraryComponent,
    children: [
      { path: '', redirectTo: 'base', pathMatch: 'full' },
      { path: 'base', component: UiBaseComponent },
      { path: 'interaction', component: UiInteractionComponent }
    ]
  },
  {
    path: '**',
    redirectTo: 'base',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiLibraryRoutingModule {}
