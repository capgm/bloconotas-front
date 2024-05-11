import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotaListComponent } from './nota-list/nota-list.component';
import { NotaEditComponent } from './nota-edit/nota-edit.component';
import { NotaCreateComponent } from './nota-create/nota-create.component';
import { NotaViewComponent } from './nota-view/nota-view.component';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { TokenInterceptor } from '../../TokenInterceptor';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';



@NgModule({
  declarations: [
    NotaViewComponent,
    NotaListComponent,
    NotaEditComponent,
    NotaCreateComponent
  ],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    provideHttpClient(),
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ],
  exports:[
    NotaViewComponent,
    NotaListComponent,
    NotaEditComponent,
    NotaCreateComponent
  ]
})
export class NotaModule { }
