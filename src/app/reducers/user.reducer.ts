import { Action, createReducer, on } from '@ngrx/store';
import {UserWithIdModel} from '../models/user.model';
import {
  addFriendsSuccess,
  createUserSuccess,
  deleteUserSuccess,
  editUserNameSuccess,
  removeFriendsSuccess
} from '../actions/user.actions';


export const userFeatureKey = 'user';

export interface State extends UserWithIdModel{

}

export const initialState: State = {
  id: '',
  name: '',
  friends: [],
  meetings: [],
  phone: ''
};

export const UserReducer = createReducer(
  initialState,
  on(createUserSuccess, (state, payload) => {
    const {id, name, friends, meetings, phone} = payload.user;
    return {
      ...state,
      id, name, friends, meetings, phone
    }
  }),
  on(editUserNameSuccess, (state, payload) => ({...state, name: payload.name})),
  on(addFriendsSuccess, (state, payload) => {
    const dirtyUserList = [...state.friends, ...payload.users];
    return {...state, friends: [...cleanUserList(dirtyUserList)]}
  }),
  on(removeFriendsSuccess, (state, payload) => ({
    ...state,
    friends: [...state.friends.filter((user) => !payload.ids.includes(user.id))]
  })),
  on(deleteUserSuccess, (state, payload) => {
    if (!payload.success) return state;
    return initialState;
  })
);

/**
 * Функция отчистки списка пользователей
 * @param dirty
 */
const cleanUserList = (dirty: UserWithIdModel[]): UserWithIdModel[] => {
  const dirtyPhones = dirty.map(({phone}) => phone);
  const cleanPhones = new Set([...dirtyPhones]);

  let cleanUsers: UserWithIdModel[] = [];

  for (let value of cleanPhones.values()) {
    const user = dirty.find(({phone}) => phone === value);
    if (user) {
      cleanUsers.push(user);
    }
  }

  return cleanUsers;
}
