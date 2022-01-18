import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { AddressPrintComponent } from './address-print/address-print.component';
import { ChildrenInformationComponent } from './children-information/children-information.component';
import { DetailsOfFamilyComponent } from './details-of-family/details-of-family.component';
import { UsersComponent } from './users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    PersonalCardComponent,
    PersonalInformationComponent,
    AddressPrintComponent,
    ChildrenInformationComponent,
    DetailsOfFamilyComponent,
    CreateUserComponent,
    UsersListComponent
  ],
  imports: [

    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ]
})
export class UsersModule { }
