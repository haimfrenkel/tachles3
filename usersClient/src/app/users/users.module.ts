import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    PersonalCardComponent,
    PersonalInformationComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ]
})
export class UsersModule { }
