import { Injectable } from '@angular/core';
import { Curso } from "../models/curso";
import { HttpClient } from "@angular/common/http";
import { delay, first, Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'api/cursos';

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.API)
      .pipe(
        first(),
        delay(1000),
        tap(cursos => console.log(cursos))
      );
  }

  loadById(id: string): Observable<Curso> {
    return this.httpClient.get<Curso>(`${this.API}/${id}`)
      .pipe()
  }

  save(record: Partial<Curso>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Curso>) {
    return this.httpClient.post<Curso>(this.API, record)
      .pipe(first());
  }

  private update(record: Partial<Curso>) {
    return this.httpClient.put<Curso>(`${this.API}/${record._id}`, record)
      .pipe(first());
  }
}
