import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';

import * as LayoutActions from '../../actions/layout.actions';
import * as LayoutReducer from '../../reducers/layout.reducer';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public usersModal$: Observable<boolean>;

  constructor(private layoutStore: Store<LayoutReducer.State>) {
    this.usersModal$ = layoutStore.select(
      (state: any) => state.layoutStore.usersModal
    );
  }

  ngOnInit() {}

  onToggleCarsDemoModal() {
    this.layoutStore.dispatch(new LayoutActions.ToggleUsersModal());
  }
}
