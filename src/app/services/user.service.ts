import { Injectable } from '@angular/core';
import {UserModel, UserWithIdModel} from '../models/user.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  mockFriends: UserWithIdModel[] = FRIENDS;

  constructor() { }

  createUser(user: UserModel): Observable<UserWithIdModel> {
    return of({...user,  id: 'random string'});
  }

  editUserName(name: string): Observable<string> {
    return of(name);
  }

  loadUsersByPhone(phones: string[]): Observable<UserWithIdModel[]> {
    // TODO Запрос к базе со списком телефонов

    return of(this.mockFindFriends(phones));
  }

  removeUsersById(ids: string[]): Observable<string[]> {
    return of(ids);
  }

  mockFindFriends(phones: string[]): UserWithIdModel[] {
    let _friends: UserWithIdModel[] = [];
    phones.forEach((phone) => {
      const idx = this.mockFriends.findIndex(user => user.phone === phone);
      if (idx >= 0) {
        _friends.push(this.mockFriends[idx]);
      }
      return;
    })

    return _friends;
  }

  deleteUser() {
    return of(true);
  }
}

const FRIENDS: UserWithIdModel[] = [
  {
    id: '1',
    phone: '+71111111111',
    name: 'test friend 1',
    friends: [],
    meetings: [],
  },
  {
    id: '2',
    phone: '+72222222222',
    name: 'test friend 2',
    friends: [],
    meetings: [],
  },
  {
    id: '3',
    phone: '+73333333333',
    name: 'test friend 3',
    friends: [],
    meetings: [],
  },
  {
    id: '4',
    phone: '+74444444444',
    name: 'test friend 4',
    friends: [],
    meetings: [],
  }
]
