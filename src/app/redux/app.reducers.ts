import { ActionReducerMap } from '@ngrx/store';
import * as userReducer from './reducers/user.reducer';

export interface AppState {
  users: userReducer.State;
}

export const rootReducer: ActionReducerMap<AppState> = {
  users: userReducer.reducer,
};
