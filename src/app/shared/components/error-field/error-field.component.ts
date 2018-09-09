import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-field',
  templateUrl: 'error-field.component.html',
  styleUrls: ['./error-field.component.scss']
})
export class ErrorFieldComponent implements OnInit {
  @Input()
  field: any;
  @Input()
  name: string;
  @Input()
  min: number;
  @Input()
  max: number;
  constructor() {}

  ngOnInit() {}
}
