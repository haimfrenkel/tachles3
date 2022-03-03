import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayUserRoutingModule } from './display-user-routing.module';
import { LanguagesModule } from 'src/app/languages/languages.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DisplayUserRoutingModule,
    LanguagesModule,

  ]
})
export class DisplayUserModule { }
