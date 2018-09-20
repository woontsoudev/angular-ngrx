import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './components/users/users.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { ReportComponent } from './components/report/report.component';

@NgModule({
  imports: [AdminRoutingModule, SharedModule],
  exports: [],
  declarations: [
    AdminComponent,
    UsersComponent,
    ConfigurationComponent,
    ReportComponent
  ],
  providers: []
})
export class AdminModule {}
