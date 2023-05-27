import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { userReducer, UserState } from './user.reducer';


export interface State {
  users: UserState
}

export const reducers: ActionReducerMap<State> = {
  users: userReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
