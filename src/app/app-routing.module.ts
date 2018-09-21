import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './views/admin/admin.module#AdminModule'
  },
  {
    path: 'dashboard',
    loadChildren: './views/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'properties',
    loadChildren: './views/properties/properties.module#PropertiesModule'
  },
  {
    path: 'residents',
    loadChildren: './views/residents/residents.module#ResidentsModule'
  },
  {
    path: 'ui',
    loadChildren: './views/ui-library/ui-library.module#UiLibraryModule'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
