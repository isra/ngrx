import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { UsersService } from '../../dashboard/services/users.service';
import * as fromUsersActions from '../actions/user.actions';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsersActions.REQUEST_USER_TYPE),
      mergeMap(() =>
        this.usersService.getUsers().pipe(
          map((users) => fromUsersActions.loadUsers({ payload: users })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
