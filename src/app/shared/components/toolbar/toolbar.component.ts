import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input()
  dropdownOptions: [];
  @Output()
  dropdownSelectedItem = new EventEmitter<object>();

  constructor() {}

  ngOnInit() {}

  onDropdownSelectedItem(event) {
    if (event.originalEvent.type === 'click') {
      this.dropdownSelectedItem.emit(event.value);
    }
  }
}
