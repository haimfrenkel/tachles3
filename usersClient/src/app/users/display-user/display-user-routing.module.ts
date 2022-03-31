import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalCardComponent } from './personal-card/personal-card.component';


const routes: Routes = [{ path: '', component: PersonalCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayUserRoutingModule { }
