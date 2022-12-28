import { Injectable } from '@angular/core';
import { Curso } from "../models/curso";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient: HttpClient) {
  }

  list(): Curso[] {
    return [
      {id: '1', nome: 'Curso de Java', categoria: 'Back'},
      {id: '2', nome: 'Curso de Angular', categoria: 'Front'},
    ]
  }
}
