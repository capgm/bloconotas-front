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
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';



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
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatFormField,
    MatLabel,
    MatListModule,
    MatIconModule
  ],
  exports:[
    NotaViewComponent,
    NotaListComponent,
    NotaEditComponent,
    NotaCreateComponent
  ]
})
export class NotaModule { }
