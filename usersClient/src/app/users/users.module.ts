import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
<<<<<<< HEAD
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
=======
import { UsersListComponent } from './users-list/users-list.component';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
>>>>>>> d2e58f60affedda2619e494fa18ab4f9d15dd135


@NgModule({
  declarations: [
    UsersComponent,
<<<<<<< HEAD
    PersonalCardComponent,
    CreateUserComponent
=======
    UsersListComponent,
    PersonalCardComponent,
    PersonalInformationComponent
>>>>>>> d2e58f60affedda2619e494fa18ab4f9d15dd135
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    ReactiveFormsModule

=======
    AgGridModule.withComponents([])
>>>>>>> d2e58f60affedda2619e494fa18ab4f9d15dd135
  ]
})
export class UsersModule { }
