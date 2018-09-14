import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

// Dropdown
import { dropDownOptions } from '../../../../mocks/components';
import { Option } from '../../../properties/interfaces';

@Component({
  selector: 'app-ui-components',
  templateUrl: './ui-components.component.html',
  styleUrls: ['../../ui-library.component.scss']
})
export class UiComponentsComponent implements OnInit {
  options: SelectItem[];
  selectedOption: Option;

  constructor() {
    this.options = dropDownOptions;
  }

  ngOnInit() {}
}
