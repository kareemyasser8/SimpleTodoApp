import { UserActions } from '../actions/user.actions';
import { User } from '../User.model';

export const userFeatureKey = 'user';

export interface UserState {
  users: Array<User>
}

export const initialState: UserState = {
  users: []
};

export function userReducer(state = initialState, action: UserActions): UserState{
  switch(action.type){
    case '[AddUser] Add User':
      return {...state, users: [...state.users, action.user]}

    default:
      return state;
  }
}
