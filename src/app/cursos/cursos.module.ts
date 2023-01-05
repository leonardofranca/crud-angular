import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { AppMaterialModule } from "../compartilhado/app-material/app-material.module";
import { CompartilhadoModule } from "../compartilhado/compartilhado.module";
import { CursoFormComponent } from './curso-form/curso-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CursosListComponent } from './cursos-list/cursos-list.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursoFormComponent,
    CursosListComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule,
    CompartilhadoModule,
    ReactiveFormsModule
  ]
})
export class CursosModule {
}
