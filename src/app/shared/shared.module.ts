import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgBootstrapModule } from './ng-bootstrap.module';
import { IconsModule } from './icons.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageComponent } from './components/page/page.component';
import { MinHeightLayoutCalcDirective } from './directives/minHeightLayoutCalc.directive';
import { SubnavComponent } from './components/subnav/subnav.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgBootstrapModule,
    IconsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgBootstrapModule,
    IconsModule,
    PageComponent,
    SubnavComponent
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PageComponent,
    MinHeightLayoutCalcDirective,
    SubnavComponent
  ],
  providers: [],
})
export class SharedModule { }
