import { Component, OnInit } from '@angular/core';
// Redux
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.reducers';
import * as fromUserActions from '@redux/actions/user.actions';
// import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    // private usersService: UsersService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fromUserActions.requestUsers());
    /* this.usersService.getUsers().subscribe((response) => {
      this.store.dispatch(fromUserActions.loadUsers({ payload: response }));
    }); */
  }
}
