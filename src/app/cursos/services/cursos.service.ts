import { Injectable } from '@angular/core';
import { Curso } from "../models/curso";
import { HttpClient } from "@angular/common/http";
import { delay, first, Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.API)
      .pipe(
        first(),
        delay(5000),
        tap(cursos => console.log(cursos))
      );
  }
}
