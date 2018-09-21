import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

import { UsersService } from '../services/users.service';
import * as UsersActions from '../actions/users.actions';
import * as LayoutActions from '../actions/layout.actions';
import { User } from '../models/user.model';

@Injectable()
export class UsersEffects {
  @Effect()
  getUsers$: Observable<Action> = this.action$.pipe(
    ofType(UsersActions.GET_USERS),
    switchMap(
      (): Observable<UsersActions.SetUsers> => {
        return this.usersService.getUsers().pipe(
          map(
            (users: User[]): any => {
              return new UsersActions.SetUsers(users);
            }
          ),
          catchError(err => {
            return of([err]);
          })
        );
      }
    )
  );

  @Effect()
  editUser$: Observable<Action> = this.action$.pipe(
    ofType(UsersActions.EDIT_USER),
    map((action: UsersActions.EditUser) => action.payload),
    switchMap(
      (user): Action[] => {
        return [
          new LayoutActions.ToggleUsersModal(),
          new UsersActions.SetEditingUser(user)
        ];
      }
    )
  );

  @Effect()
  updateUser$: Observable<Action> = this.action$.pipe(
    ofType(UsersActions.UPDATE_USER),
    map((action: UsersActions.UpdateUser) => action.payload),
    switchMap(
      (user): Observable<{}> => {
        return this.usersService.updateUser(user).pipe(
          map((res: User) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Done',
              detail: `${res.username} was edited`
            });
            return res;
          }),
          catchError(err => {
            return of([err]);
          })
        );
      }
    ),
    switchMap(
      (user: User): Action[] => {
        return [
          new UsersActions.SaveUser(user),
          new LayoutActions.ToggleUsersModal()
        ];
      }
    )
  );

  @Effect()
  createUser$: Observable<Action> = this.action$.pipe(
    ofType(UsersActions.CREATE_USER),
    switchMap(
      (): Action[] => {
        return [
          new LayoutActions.ToggleUsersModal(),
          new UsersActions.SetEditingUser(null)
        ];
      }
    )
  );

  @Effect()
  addUser$: Observable<Action> = this.action$.pipe(
    ofType(UsersActions.ADD_USER),
    map((action: UsersActions.AddUser) => action.payload),
    switchMap(
      (user): Observable<{}> => {
        return this.usersService.addUser(user).pipe(
          map((res: User) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Done',
              detail: `${res.username} was added`
            });
            return res;
          }),
          catchError(err => {
            return of([err]);
          })
        );
      }
    ),
    switchMap(
      (user: User): Action[] => {
        return [
          new UsersActions.SaveUser(user),
          new LayoutActions.ToggleUsersModal()
        ];
      }
    )
  );

  @Effect()
  deleteUser$: Observable<Action> = this.action$.pipe(
    ofType(UsersActions.DELETE_USER),
    map((action: UsersActions.DeleteUser) => action.payload),
    switchMap((user: User) => {
      return this.usersService.deleteUser(user).pipe(
        map(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Done',
            detail: `${user.username} was successfully deleted`
          });
          return user;
        }),
        catchError(err => {
          return of([err]);
        })
      );
    }),
    switchMap(
      (user: User): Action[] => {
        return [new UsersActions.RemoveUser(user)];
      }
    )
  );

  constructor(
    private action$: Actions,
    private usersService: UsersService,
    private messageService: MessageService
  ) {}
}
