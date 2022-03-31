import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { BankAccountFormComponent } from './bank-account-form/bank-account-form.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { JobFormComponent } from './job-form/job-form.component';
import { MainFormComponent } from './main-form/main-form.component';
import { NameFormComponent } from './name-form/name-form.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { PhoneFormComponent } from './phone-form/phone-form.component';


const routes: Routes = [
  { path: '', component: MainFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }