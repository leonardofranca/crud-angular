import { Component } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Curso } from "../../models/curso";
import { catchError, Observable, of } from "rxjs";
import { ErrorDialogComponent } from "../../../compartilhado/componentes/error-dialog/error-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  cursosObs$: Observable<Curso[]> | null = null;

  constructor(
    private cursosService: CursosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  private getCursosObs() {
    return this.cursosService.list()
      .pipe(
        catchError(() => {
          this.onError("Erro ao Carregar cursos");
          return of([]);
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
        data: errorMsg
      }
    )
  }

  ngOnInit() {
  }

  onAdd() {
    this.router.navigate(['novo'], {relativeTo: this.route});
  }

  onEdit(curso: Curso) {
    this.router.navigate(['editar', curso._id], {relativeTo: this.route});
  }

  onDelete(curso: Curso) {
    this.cursosService.delete(curso._id)
      .subscribe({
          next: () => {
            this.refresh();
            this.snackBar.open('Curso deletado com sucesso', 'X', {
              duration: 5000,
              verticalPosition: "top",
              horizontalPosition: "center"
            })
          },
          error: () => {
            this.onError('Erro ao tentar remover curso')
          }
        }
      );
  }

  refresh() {
    this.cursosObs$ = this.getCursosObs();
  }
}
