import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { RegisterComponent } from './componentes/usuario/register/register.component';
import { AuthGuard } from './service/AuthGuard';
import { NotaListComponent } from './componentes/nota/nota-list/nota-list.component';
import { NotaCreateComponent} from './componentes/nota/nota-create/nota-create.component';
import { NotaEditComponent } from './componentes/nota/nota-edit/nota-edit.component';
import { NotaViewComponent } from './componentes/nota/nota-view/nota-view.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'nota-lista', component: NotaListComponent ,canActivate: [AuthGuard] },
  { path: 'nota-create', component: NotaCreateComponent ,canActivate: [AuthGuard]},
  { path: 'nota-edit/:id', component: NotaEditComponent ,canActivate: [AuthGuard]},
  { path: 'nota-view/:id', component: NotaViewComponent ,canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
