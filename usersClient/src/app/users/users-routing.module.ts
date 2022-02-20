import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { MainFormComponent } from './create/main-form/main-form.component';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';
import { AuthGuardService as AuthGuard } from '../../app/auth/auth-guard.service'
import { ExportDataComponent } from './export-data/export-data.component';

const routes: Routes = [
  { path: 'create', loadChildren: () => import('../users/create/create.module').then(m => m.CreateModule), canActivate: [AuthGuard] },
  { path: '', component: UsersComponent, canActivate: [AuthGuard]  },
  { path:  'personal-card/:id', component: PersonalCardComponent, canActivate: [AuthGuard] },
  { path:  'export', component: ExportDataComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
