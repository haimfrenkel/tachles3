import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UsersComponent,
    PersonalCardComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ]
})
export class UsersModule { }
