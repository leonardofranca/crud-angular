import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { Curso } from "../models/curso";
import { Observable } from "rxjs";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  displayedColumns: string[] = ['nome', 'categoria'];

  dataSource: Observable<Curso[]>;

  constructor(private cursosService: CursosService) {
    this.dataSource = this.cursosService.list();
  }

  ngOnInit() {
  }
}
