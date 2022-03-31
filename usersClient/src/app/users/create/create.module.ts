import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameFormComponent } from './name-form/name-form.component';
import { BankAccountFormComponent } from './bank-account-form/bank-account-form.component';
import { PhoneFormComponent } from './phone-form/phone-form.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { JobFormComponent } from './job-form/job-form.component';
import { MainFormComponent } from './main-form/main-form.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateRoutingModule } from './create-routing.module';
import { AddressFormComponent } from './address-form/address-form.component';
import { LanguagesModule } from 'src/app/languages/languages.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppModule } from 'src/app/app.module';



@NgModule({
  declarations: [
    NameFormComponent,
    BankAccountFormComponent,
    PhoneFormComponent,
    ChildFormComponent,
    JobFormComponent,
    MainFormComponent,
    PersonalFormComponent,
    AddressFormComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateRoutingModule,
    LanguagesModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  exports: [
  ]

})
export class CreateModule { }
