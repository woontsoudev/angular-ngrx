import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  exports: [TableModule, CheckboxModule]
})
export class PrimeNgModule { }
