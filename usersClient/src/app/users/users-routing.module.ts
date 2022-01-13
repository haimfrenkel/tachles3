import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CreateUserComponent } from './create-user/create-user.component';
=======
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { UsersListComponent } from './users-list/users-list.component';
>>>>>>> d2e58f60affedda2619e494fa18ab4f9d15dd135
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
<<<<<<< HEAD
  // { path: '/create', component: CreateUserComponent}
=======
  { path: 'user-list', component: UsersListComponent },
  { path: 'personal-card/:id', component:  PersonalCardComponent },


>>>>>>> d2e58f60affedda2619e494fa18ab4f9d15dd135
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
