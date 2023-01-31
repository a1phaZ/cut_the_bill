import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {UserWithIdModel} from '../models/user.model';
import {selectUser} from '../selectors/user.selectors';
import {addFriends, createUser, deleteUser, editUserName, removeFriends} from '../actions/user.actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // user$!: Observable<UserWithIdModel>;

  constructor(
    private store: Store<UserWithIdModel>,
  ) {
  }

  ngOnInit(): void {
    this.store.pipe(
      select(selectUser),
    ).subscribe(console.log);

    this.store.dispatch(createUser({user: {name: 'alphaZ', friends: [], meetings: [], phone: '+79298290256'}}));
    this.store.dispatch(editUserName({name: 'alphaZ_'}));
    this.store.dispatch(addFriends({
      phones: [
        '+71111111111', '+74444444444',
      ]
    }));
    this.store.dispatch(addFriends({
      phones: [
        '+71111111111', '+72222222222',
      ]
    }));
    this.store.dispatch(removeFriends({
      ids: [
        '1',
        '4'
      ]
    }));
    this.store.dispatch(deleteUser());
  }

}
