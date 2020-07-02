import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// routing
import { DashboardRoutingModule } from './dashboard-routing.module';

// module
import { ShareModule } from '../share/share.module';

// components
import { HomeComponent } from './views/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [HomeComponent, UsersComponent, UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule,
    ShareModule,
  ],
})
export class DashboardModule {}
