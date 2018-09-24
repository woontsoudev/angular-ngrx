import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';

import * as PropertiesActions from '../../../../actions/properties.actions';
import * as PropertiesReducer from '../../../../reducers/properties.reducer';

@Component({
  selector: 'app-units',
  templateUrl: 'units.component.html'
})
export class UnitsComponent implements OnInit {
  @Input()
  units: object;

  public cols = [
    { field: 'unitId', header: 'Unit' },
    { field: 'name', header: 'Name' },
    { field: 'leaseTo', header: 'Lease To' },
    { field: 'policyEnd', header: 'Policy End' },
    { field: 'coverageProvider', header: 'Coverage Provider' },
    { field: 'policyStatus', header: 'Policy Status' },
    { field: 'paidInFull', header: 'Paid In Full' },
    { field: 'atRisk', header: 'At Risk' }
  ];

  constructor(
    private propertiesStore: Store<PropertiesReducer.State>,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {}

  onRowSelectUnit(unit) {
    this.propertiesStore.dispatch(new PropertiesActions.EditUnit(unit.id));
  }

  onAddUnit() {
    this.propertiesStore.dispatch(new PropertiesActions.CreateUnit());
  }

  onRowDeleteUnit(unit) {
    this.confirmationService.confirm({
      message: `Do you want to delete ${unit.name}?`,
      accept: () => {
        this.propertiesStore.dispatch(new PropertiesActions.DeleteUnit(unit));
      }
    });
  }
}
