import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './service/AuthGuard';
import { NotaListComponent } from './nota-list/nota-list.component';
import { NotaCreateComponent} from './nota-create/nota-create.component';
import { NotaEditComponent } from './nota-edit/nota-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent ,canActivate: [AuthGuard]  },
  { path: 'nota-lista', component: NotaListComponent ,canActivate: [AuthGuard] },
  { path: 'nota-form', component: NotaListComponent ,canActivate: [AuthGuard] },
  { path: 'nota-create', component: NotaCreateComponent ,canActivate: [AuthGuard]},
  { path: 'nota-edit', component: NotaEditComponent ,canActivate: [AuthGuard]},
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
