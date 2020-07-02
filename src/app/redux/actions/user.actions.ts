import { createAction, props } from '@ngrx/store';
import { User } from '../../dashboard/interfaces/user.interface';

export const REQUEST_USER_TYPE = '[USERS] Request users of service';

export const requestUsers = createAction(REQUEST_USER_TYPE);

export const loadUsers = createAction(
  '[USERS] Load users in storage',
  props<{
    payload: User[];
  }>()
);

export const removeUser = createAction(
  '[Users] Remove User by Id',
  props<{
    payload: number;
  }>()
);
