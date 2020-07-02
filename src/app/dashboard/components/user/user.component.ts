import { Component, OnInit, Input } from '@angular/core';

// redux
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.reducers';
import * as fromUserActions from '@redux/actions/user.actions';

import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input()
  user: User;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  remove(event: any): void {
    event.preventDefault();
    this.store.dispatch(fromUserActions.removeUser({ payload: this.user.id }));
  }
}
