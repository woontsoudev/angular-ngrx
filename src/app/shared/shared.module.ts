import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PrimeNgModule } from './primeng.module';
import { NgBootstrapModule } from './ng-bootstrap.module';
import { IconsModule } from './icons.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageComponent } from './components/page/page.component';
import { MinHeightLayoutCalcDirective } from './directives/minHeightLayoutCalc.directive';
import { SubnavComponent } from './components/subnav/subnav.component';
import { DataTableComponent } from './components/data-table/data-table.component';

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
    DataTableComponent
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PageComponent,
    MinHeightLayoutCalcDirective,
    SubnavComponent,
    DataTableComponent
  ],
  providers: [],
})
export class SharedModule { }
