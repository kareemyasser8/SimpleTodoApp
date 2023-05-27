import { Action } from '@ngrx/store';

export class UserConditionsLoaded implements Action{
  readonly type =  '[UserConditions] User Conditions Loaded';
  constructor(public users, public conditions){}
}

export class UserConditionsLoadFailed implements Action{
  readonly type = '[UserConditions] User Conditions Load Failed';
  constructor(public users, public error){}
}

export type UserCurrentConditionsActions = UserConditionsLoaded | UserConditionsLoadFailed;



