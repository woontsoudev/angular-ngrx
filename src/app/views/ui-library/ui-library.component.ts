import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';

import * as LayoutActions from '../../actions/layout.actions';
import * as LayoutReducer from '../../reducers/layout.reducer';

@Component({
  selector: 'app-ui-library',
  templateUrl: 'ui-library.component.html',
  styleUrls: ['./ui-library.component.scss']
})
export class UiLibraryComponent implements OnInit {
  public modalExample$: Observable<boolean>;

  constructor(private layoutStore: Store<LayoutReducer.State>) {
    this.modalExample$ = layoutStore.select(
      (state: any) => state.layoutStore.modalExample
    );
  }

  ngOnInit() {}

  onVisibilityChange() {
    this.layoutStore.dispatch(new LayoutActions.ToggleModalExample());
  }

  onToggleExampleModal() {
    this.layoutStore.dispatch(new LayoutActions.ToggleModalExample());
  }
}
