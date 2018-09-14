import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/api';
import { Option } from './interfaces';

@Component({
  selector: 'app-properties',
  templateUrl: 'properties.component.html'
})
export class PropertiesComponent implements OnInit {
  options: SelectItem[];
  selectedOption: Option;

  constructor() {
    this.options = [
      { label: 'Select a Property', value: null },
      {
        label: 'Hillside Acres Community',
        value: {
          id: 1,
          name: 'Hillside Acres Community',
          location: '100 Causeway Street Boston, MA 02111'
        }
      },
      {
        label: 'Riverwalk Community',
        value: {
          id: 2,
          name: 'Riverwalk Community',
          location: '100 Causeway Street Boston, MA 02111'
        }
      },
      {
        label: 'Mill No. 5',
        value: {
          id: 3,
          name: 'Mil No. 5',
          location: '100 Causeway Street Boston, MA 02111'
        }
      },
      {
        label: 'Merrifield Estates',
        value: {
          id: 4,
          name: 'Merrifield Estates',
          location: '100 Causeway Street Boston, MA 02111'
        }
      },
      {
        label: 'Edagewood Lofts',
        value: {
          id: 5,
          name: 'Edagewood Lofts',
          location: '100 Causeway Street Boston, MA 02111'
        }
      }
    ];
  }

  ngOnInit() {}
}
