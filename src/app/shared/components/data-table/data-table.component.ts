import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: 'data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataTableComponent implements OnInit {
  @Input()
  data: Observable<any[]>;
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
  @Input()
  placeholder = 'Search...';
  @Output()
  rowSelect = new EventEmitter<any>();
  @Output()
  rowDelete = new EventEmitter<any>();

  public filterBySelectedNumber: number;

  constructor() {}

  ngOnInit() {}

  onFilterByNumber(event) {
    console.log(event);
  }

  onRowSelect(item) {
    this.rowSelect.emit(item);
  }

  onRowDelete(item) {
    this.rowDelete.emit(item);
  }
}
