import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user-list', component: UsersListComponent },
  { path: 'personal-card/:id', component:  PersonalCardComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
