import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './componentes/error-dialog/error-dialog.component';
import { AppMaterialModule } from "./app-material/app-material.module";
import { CategoriaPipe } from './pipes/categoria.pipe';
import { ConfirmationDialogComponent } from "./componentes/confirmation-dialog/confirmation-dialog.component";



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoriaPipe,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    ErrorDialogComponent,
    CategoriaPipe,
    ConfirmationDialogComponent
  ]
})
export class CompartilhadoModule { }
