import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';

import * as ConuterActions from '../../../../actions/counter.actions';
import * as CounterReducer from '../../../../reducers/counter.reducer';

@Component({
  selector: 'app-ui-interaction',
  templateUrl: './ui-interaction.component.html'
})

export class UiInteractionComponent implements OnInit {
  public count$: Observable<number>;
  constructor(private store: Store<CounterReducer.State>) {
    this.count$ = store.select((state: any) => state.counterStore.count);
  }

  ngOnInit() {}

  increment() {
    this.store.dispatch(new ConuterActions.IncrementCounter());
  }

  decrement() {
    this.store.dispatch(new ConuterActions.DecrementCounter());
  }
}
