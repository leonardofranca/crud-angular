import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CursosService } from "../services/cursos.service";
import { Curso } from "../models/curso";

@Injectable({
  providedIn: 'root'
})
export class CursoResolver implements Resolve<Curso> {


  constructor(private service: CursosService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({_id: '', nome: '', categoria: ''});
  }
}
