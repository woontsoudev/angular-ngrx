import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  exports: [
    TableModule,
    CheckboxModule,
    DialogModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    KeyFilterModule,
    InputTextModule,
    AutoCompleteModule,
    InputSwitchModule
  ]
})
export class PrimeNgModule {}
