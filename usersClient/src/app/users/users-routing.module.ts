import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { MainFormComponent } from './create/main-form/main-form.component';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: 'create', loadChildren: () => import('../users/create/create.module').then(m => m.CreateModule) },
  { path: '', component: UsersComponent },
  { path: 'user-list', component: UsersListComponent },
  { path: 'personal-card/:id', component:  PersonalCardComponent },
  { path: 'create-user', component:  CreateUserComponent },
  { path: 'create-user/:id', component:  CreateUserComponent },
  { path: 'new-create-user', component:  MainFormComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
