import { Component, Input } from '@angular/core';
import { Curso } from "../models/curso";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent {

  readonly displayedColumns: string[] = ['nome', 'categoria', 'acoes'];
  @Input() cursos: Curso[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  onAdd() {
    this.router.navigate(['novo'], {relativeTo: this.route});
  }
}
