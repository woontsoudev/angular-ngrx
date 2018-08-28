import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  exports: [TableModule, CheckboxModule, DialogModule, ButtonModule]
})
export class PrimeNgModule {}
