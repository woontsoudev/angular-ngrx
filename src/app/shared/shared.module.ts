import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Modules
import { PrimeNgModule } from './primeng.module';
import { NgBootstrapModule } from './ng-bootstrap.module';
import { IconsModule } from './icons.module';

// Components
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageComponent } from './components/page/page.component';
import { MinHeightLayoutCalcDirective } from './directives/minHeightLayoutCalc.directive';
import { SubnavComponent } from './components/subnav/subnav.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { ErrorFieldComponent } from './components/error-field/error-field.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNgModule,
    NgBootstrapModule,
    IconsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNgModule,
    NgBootstrapModule,
    IconsModule,
    PageComponent,
    SubnavComponent,
    DataTableComponent,
    ActionBarComponent,
    TitleBarComponent,
    ErrorFieldComponent,
    NotificationsComponent,
    ActionButtonsComponent,
    ToolbarComponent,
    RouterModule,
    ModalComponent,
    RouterModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PageComponent,
    MinHeightLayoutCalcDirective,
    SubnavComponent,
    DataTableComponent,
    ActionBarComponent,
    TitleBarComponent,
    ErrorFieldComponent,
    NotificationsComponent,
    ActionButtonsComponent,
    ToolbarComponent,
    ModalComponent
  ],
  providers: []
})
export class SharedModule {}
