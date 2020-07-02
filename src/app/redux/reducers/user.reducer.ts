import { createReducer, Action, on } from '@ngrx/store';
import * as fromUserActions from '../actions/user.actions';

import { User } from '../../dashboard/interfaces/user.interface';

export interface State {
  data: User[];
}

const initialState: State = {
  data: [],
};

const userReducer = createReducer(
  initialState,
  on(fromUserActions.loadUsers, (state, { payload }) => ({
    ...state,
    data: payload,
  })),
  on(fromUserActions.requestUsers, (state) => ({
    ...state,
    data: [],
  })),
  on(fromUserActions.removeUser, (state, { payload }) => ({
    ...state,
    data: state.data.filter((item) => item.id !== payload),
  }))
);

export function reducer(state: State = initialState, action: Action) {
  return userReducer(state, action);
}
