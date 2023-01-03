import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { AppMaterialModule } from "../compartilhado/app-material/app-material.module";
import { CompartilhadoModule } from "../compartilhado/compartilhado.module";
import { MatIconModule } from "@angular/material/icon";
import { CursoFormComponent } from './curso-form/curso-form.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursoFormComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule,
    CompartilhadoModule,
  ]
})
export class CursosModule {
}
