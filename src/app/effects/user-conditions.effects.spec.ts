import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UserConditionsEffects } from './user-conditions.effects';

describe('UserConditionsEffects', () => {
  let actions$: Observable<any>;
  let effects: UserConditionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserConditionsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UserConditionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
