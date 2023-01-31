import { createAction, props } from '@ngrx/store';
import {UserModel, UserWithIdModel} from '../models/user.model';
import {ErrorModel} from '../models/error.model';

export enum EUserActions {
  createUser = '[User] Create User',
  createUserSuccess = '[User] Create User Success',
  createUserError = '[User] Create User Error',
  editUserName = '[User] Edit User Name',
  editUserNameSuccess = '[User] Edit User Name Success',
  editUserNameError = '[User] Edit User Name Error',
  addFriends = '[User] Add Friends',
  addFriendsSuccess = '[User] Add Friends Success',
  addFriendsError = '[User] Add Friends Error',
  removeFriends = '[User] Remove Friends',
  removeFriendsSuccess = '[User] Remove Friends Success',
  removeFriendsError = '[User] Remove Friends Error',
  deleteUser = '[User] Delete User',
  deleteUserSuccess = '[User] Delete User Success',
  deleteUserError = '[User] Delete User Error',
}

export const createUser = createAction(
  EUserActions.createUser,
  props<{user: UserModel}>()
)
export const createUserSuccess = createAction(
  EUserActions.createUserSuccess,
  props<{ user: UserWithIdModel }>()
)
export const createUserError = createAction(
  EUserActions.createUserError,
  props<ErrorModel>()
)

export const editUserName = createAction(
  EUserActions.editUserName,
  props<{name: string}>()
)
export const editUserNameSuccess = createAction(
  EUserActions.editUserNameSuccess,
  props<{name: string}>()
)
export const editUserNameError = createAction(
  EUserActions.editUserNameError,
  props<ErrorModel>()
)

export const addFriends = createAction(
  EUserActions.addFriends,
  props<{phones: string[]}>()
)
export const addFriendsSuccess = createAction(
  EUserActions.addFriendsSuccess,
  props<{users: UserWithIdModel[]}>()
)
export const addFriendsError = createAction(
  EUserActions.addFriendsError,
  props<ErrorModel>()
)

export const removeFriends = createAction(
  EUserActions.removeFriends,
  props<{ids: string[]}>()
)
export const removeFriendsSuccess = createAction(
  EUserActions.removeFriendsSuccess,
  props<{ids: string[]}>()
)
export const removeFriendsError = createAction(
  EUserActions.removeFriendsError,
  props<ErrorModel>()
)

export const deleteUser = createAction(
  EUserActions.deleteUser,
)
export const deleteUserSuccess = createAction(
  EUserActions.deleteUserSuccess,
  props<{success: boolean}>()
)
export const deleteUserError = createAction(
  EUserActions.deleteUserError,
  props<ErrorModel>()
)
