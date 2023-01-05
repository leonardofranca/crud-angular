import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from "../../models/curso";

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent {

  readonly displayedColumns: string[] = ['nome', 'categoria', 'acoes'];
  @Input() cursos: Curso[] = [];
  @Output() add = new EventEmitter(false);

  constructor() {
  }

  onAdd() {
    this.add.emit(true);
  }
}
