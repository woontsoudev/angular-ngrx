import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {
  // Defines the size of the button.
  @Input()
  size = 'sm';
  // Defines any alternate color.
  @Input()
  color = '';

  constructor() {}

  ngOnInit() {}
}
