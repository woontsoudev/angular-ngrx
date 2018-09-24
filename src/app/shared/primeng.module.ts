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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';

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
    InputSwitchModule,
    ConfirmDialogModule,
    FileUploadModule,
    ProgressBarModule
  ]
})
export class PrimeNgModule {}
