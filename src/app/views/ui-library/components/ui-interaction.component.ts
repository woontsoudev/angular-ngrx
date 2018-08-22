import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';

import * as ConuterActions from '../../../actions/counter.actions';
import * as CounterReducer from '../../../reducers/counter.reducer';

@Component({
  selector: 'app-ui-interaction',
  template: `
  <h2 class="title">Redux example</h2>
  <div class="row">
    <div class="col">
      <article>
        <button class="btn btn-danger mr-1 mb-1" (click)="decrement()">Decrement</button>
        <button class="btn btn-primary" (click)="increment()">Increment</button>
        <p>count: {{count$ | async}}</p>
      </article>
    </div>
  </div>
  `
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
