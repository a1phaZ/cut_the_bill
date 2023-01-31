import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {UserReducer} from './user.reducer';


export interface State {

}

export const reducers: ActionReducerMap<State> = {
  user: UserReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
