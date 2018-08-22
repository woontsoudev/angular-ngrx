import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subnav',
  templateUrl: 'subnav.component.html',
  styles: [`
    :host {
      width: 100%;
    }
  `]
})

export class SubnavComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
