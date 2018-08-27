import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';

import * as ConuterActions from '../../../../actions/counter.actions';
import * as LayoutActions from '../../../../actions/layout.actions';
import * as CounterReducer from '../../../../reducers/counter.reducer';
import * as LayoutReducer from '../../../../reducers/layout.reducer';

@Component({
  selector: 'app-ui-interaction',
  templateUrl: './ui-interaction.component.html'
})

export class UiInteractionComponent implements OnInit {
  public count$: Observable<number>;
  public modalExample$: Observable<boolean>;

  constructor(
    private counterStore: Store<CounterReducer.State>,
    private layoutStore: Store<LayoutReducer.State>
  ) {
    this.count$ = counterStore.select((state: any) => state.counterStore.count);
    this.modalExample$ = layoutStore.select((state: any) => state.layoutStore.modalExample);
  }

  ngOnInit() {}

  increment() {
    this.counterStore.dispatch(new ConuterActions.IncrementCounter());
  }

  decrement() {
    this.counterStore.dispatch(new ConuterActions.DecrementCounter());
  }

  toggleExampleModal() {
    this.layoutStore.dispatch(new LayoutActions.ToggleModalExample());
  }
}
