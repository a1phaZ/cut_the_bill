import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State, userFeatureKey} from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<State>(userFeatureKey);

export const selectUser = createSelector(
  selectUserState,
  (state) => state,
)
