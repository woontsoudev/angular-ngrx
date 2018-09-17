import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';

import * as LayoutActions from './actions/layout.actions';
import * as LayoutReducer from './reducers/layout.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loader$: Observable<boolean>;

  constructor(private layoutStore: Store<LayoutReducer.State>) {
    this.loader$ = layoutStore.select((state: any) => state.layoutStore.loader);
  }

  ngOnInit() {}
}
