import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesPageModule } from './componentes-page/componentes-page';
import { NotaModule } from './nota/nota.module';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentesPageModule,
    NotaModule,
    UsuarioModule
  ],
  exports: [
    ComponentesPageModule,
    NotaModule,
    UsuarioModule
  ]
})
export class ComponentesModule { }
