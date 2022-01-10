import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  {path:'', component : HomeComponent},
  {path:'user-list', component : UsersListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
