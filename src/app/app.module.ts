import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './TokenInterceptor';
import { NotaListComponent } from './nota-list/nota-list.component';
import { NotaEditComponent } from './nota-edit/nota-edit.component';
import { NotaCreateComponent } from './nota-create/nota-create.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { provideHttpClient } from '@angular/common/http';
import { NotaViewComponent } from './nota-view/nota-view.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
