import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { AddressPrintComponent } from './address-print/address-print.component';
import { ChildrenInformationComponent } from './children-information/children-information.component';
import { DetailsOfFamilyComponent } from './details-of-family/details-of-family.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { MatIconModule } from '@angular/material/icon';
import { LanguagesModule } from '../languages/languages.module';
import { ExportDataComponent } from './export-data/export-data.component';
import { AuthInterceptor } from '../auth/auth.interceptor';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    PersonalCardComponent,
    PersonalInformationComponent,
    AddressPrintComponent,
    ChildrenInformationComponent,
    DetailsOfFamilyComponent,
    UploadFileComponent,
    ExportDataComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    MatIconModule,
    LanguagesModule,
    AuthModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
})
export class UsersModule { }
