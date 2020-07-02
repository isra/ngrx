import { Component, OnInit } from '@angular/core';

// redux
import { Store, select } from '@ngrx/store';
import { AppState } from '@redux/app.reducers';
import * as fromUserActions from '@redux/actions/user.actions';

import { User } from '../../interfaces/user.interface';

// rxjs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  // users: User[] = [];
  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.users$ = this.store.pipe(
      select('users'),
      map((users) => users.data)
    );
    /* this.store.select('users').subscribe((response) => {
      this.users = response.data;
    }); */
  }
}
