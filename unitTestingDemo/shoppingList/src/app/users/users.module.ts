import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';

import { UsersSummaryComponent } from './users-summary/users-summary.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [UsersComponent, UsersSummaryComponent]
})
export class UsersModule { }
