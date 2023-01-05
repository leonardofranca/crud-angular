import { Component } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Curso } from "../../models/curso";
import { catchError, Observable, of } from "rxjs";
import { ErrorDialogComponent } from "../../../compartilhado/componentes/error-dialog/error-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  cursosObs$: Observable<Curso[]>;

  constructor(
    private cursosService: CursosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.cursosObs$ = this.cursosService.list()
      .pipe(
        catchError(erro => {
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
}
