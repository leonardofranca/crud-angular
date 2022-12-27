import { Component } from '@angular/core';
import { Curso } from "../models/curso";

const ELEMENT_DATA: Curso[] = [
  {id: '1', nome: 'Curso de Java', categoria: 'Back'},
  {id: '2', nome: 'Curso de Angular', categoria: 'Front'},
];

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  displayedColumns: string[] = ['nome', 'categoria'];
  dataSource = ELEMENT_DATA;
}
