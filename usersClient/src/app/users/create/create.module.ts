import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameFormComponent } from './name-form/name-form.component';
import { AddressFomrComponent } from './address-form/address-fomr.component';
import { BankAccountFormComponent } from './bank-account-form/bank-account-form.component';
import { PhoneFormComponent } from './phone-form/phone-form.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { JobFormComponent } from './job-form/job-form.component';
import { MainFormComponent } from './main-form/main-form.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateRoutingModule } from './create-routing.module';
import { TranslatePipe } from 'src/app/languages/translate.pipe';


@NgModule({
  declarations: [
    NameFormComponent,
    AddressFomrComponent,
    BankAccountFormComponent,
    PhoneFormComponent,
    ChildFormComponent,
    JobFormComponent,
    MainFormComponent,
    PersonalFormComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateRoutingModule
  ]
})
export class CreateModule { }
