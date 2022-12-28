import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { Curso } from "../models/curso";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  displayedColumns: string[] = ['nome', 'categoria'];


  dataSource: Curso[] = [];

  constructor(private cursosService: CursosService) {
  }

  ngOnInit() {
    this.dataSource = this.cursosService.list();
  }
}
