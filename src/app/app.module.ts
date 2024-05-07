import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { RegisterComponent } from './componentes/usuario/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './TokenInterceptor';
import { NotaListComponent } from './componentes/nota/nota-list/nota-list.component';
import { NotaEditComponent } from './componentes/nota/nota-edit/nota-edit.component';
import { NotaCreateComponent } from './componentes/nota/nota-create/nota-create.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { provideHttpClient } from '@angular/common/http';
import { NotaViewComponent } from './componentes/nota/nota-view/nota-view.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './componentes/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotaListComponent,
    NotaEditComponent,
    NotaCreateComponent,
    HeaderComponent,
    FooterComponent,
    NotaViewComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, MatSnackBarModule],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
