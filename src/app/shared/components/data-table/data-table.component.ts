import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: 'data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataTableComponent implements OnInit {
  @Input()
  data: any[];
  @Input()
  cols: any[];
  @Input()
  rows: number;
  @Input()
  selectedValues: any[];
  @Input()
  dataKey: string;
  @Input()
  filterDisabled: string;
  @Input()
  filterByNumber: number;
  @Output()
  rowSelect = new EventEmitter<any>();

  public filterBySelectedNumber: number;

  constructor() {}

  ngOnInit() {}

  onFilterByNumber(event) {
    console.log(event);
  }

  onRowSelect(item) {
    this.rowSelect.emit(item);
  }
}
