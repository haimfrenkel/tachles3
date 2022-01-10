import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class UsersModule { }
