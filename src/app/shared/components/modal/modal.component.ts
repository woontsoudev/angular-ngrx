import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Input()
  visible: boolean;
  @Output()
  visibleChange = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  onVisibleChange(event) {
    this.visibleChange.emit(event);
  }
}
