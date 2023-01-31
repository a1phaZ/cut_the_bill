import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EUserActions} from '../actions/user.actions';
import {catchError, map, mergeMap, of} from 'rxjs';
import {UserService} from '../services/user.service';


@Injectable()
export class UserEffects {

  createUser$ = createEffect(() => this.actions$.pipe(
    ofType(EUserActions.createUser),
    mergeMap(({user}) => this.userService.createUser(user)
      .pipe(
        map((user) => ({type: EUserActions.createUserSuccess, user})),
        catchError(err => of({type: EUserActions.createUserError, error: {message: err.message}}))
      )
    )
  ))

  editUserName$ = createEffect(() => this.actions$.pipe(
    ofType(EUserActions.editUserName),
    mergeMap(({name}) => this.userService.editUserName(name)
      .pipe(
        map((name) => ({type: EUserActions.editUserNameSuccess, name})),
        catchError(err => of({type: EUserActions.editUserNameError, error: {message: err.message}}))
      )
    )
  ))

  addFriends$ = createEffect(() => this.actions$.pipe(
    ofType(EUserActions.addFriends),
    mergeMap(({phones}) => this.userService.loadUsersByPhone(phones)
      .pipe(
        map((users) => ({type: EUserActions.addFriendsSuccess, users})),
        catchError(err => of({type: EUserActions.addFriendsError, error: {message: err.message}}))
      )
    )
  ))

  removeFriends$ = createEffect(() => this.actions$.pipe(
    ofType(EUserActions.removeFriends),
    mergeMap(({ids}) => this.userService.removeUsersById(ids)
      .pipe(
        map((ids) => ({type: EUserActions.removeFriendsSuccess, ids})),
        catchError(err => of({type: EUserActions.removeFriendsError, error: {message: err.message}}))
      )
    )
  ))

  deleteUser$ = createEffect(() => this.actions$.pipe(
    ofType(EUserActions.deleteUser),
    mergeMap(() => this.userService.deleteUser()
      .pipe(
        map((success) => ({type: EUserActions.deleteUserSuccess, success})),
        catchError(err => of({type: EUserActions.deleteUserError, error: {message: err.message}}))
      )
    )
  ))


  constructor(private actions$: Actions, private userService: UserService) {
  }
}
