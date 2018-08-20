import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './views/admin/admin.module#AdminModule'
  },
  {
    path: 'ui/library',
    loadChildren: './views/ui-library/ui-library.module#UiLibraryModule'
  },
  {
    path: '**',
    redirectTo: 'admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
