import { Action } from '@ngrx/store';
import { User } from '../User.model';


export class AddUser implements Action{
  readonly type = '[AddUser] Add User'
  constructor(public user: User){}
}

export type UserActions = AddUser;



