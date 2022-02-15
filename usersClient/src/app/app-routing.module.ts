import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService as AuthGuard } from '../app/auth/auth-guard.service'
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: 'users', loadChildren: () => import('./users/users.module').then(m=> m.UsersModule), canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
