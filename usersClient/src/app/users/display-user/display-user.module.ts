import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayUserRoutingModule } from './display-user-routing.module';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { DetailsOfFamilyComponent } from './details-of-family/details-of-family.component';
import { AddressPrintComponent } from '../display-user/address-print/address-print.component';
import { ChildrenInformationComponent } from './children-information/children-information.component';
import { LanguagesModule } from '../../languages/languages.module';


@NgModule({
  declarations: [
    PersonalCardComponent,
    PersonalInformationComponent,
    AddressPrintComponent,
    ChildrenInformationComponent,
    DetailsOfFamilyComponent,
  ],
  imports: [
    CommonModule,
    LanguagesModule,

  ]
})
export class DisplayUserModule { }
