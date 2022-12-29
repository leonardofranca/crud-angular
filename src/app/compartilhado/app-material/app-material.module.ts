import { NgModule } from '@angular/core';

import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  exports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ]
})
export class AppMaterialModule {
}
