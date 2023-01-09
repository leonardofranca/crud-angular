import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { CursosService } from "../../services/cursos.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Curso } from "../../models/curso";

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    nome: ['', [Validators.required, Validators.min(5), Validators.max(100)]],
    categoria: ['', [Validators.required]]
  })

  constructor(private formBuilder: NonNullableFormBuilder,
              private service: CursosService,
              private snackBar: MatSnackBar,
              private location: Location,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const curso: Curso = this.route.snapshot.data['curso'];
    this.form.setValue({
      _id: curso._id,
      nome: curso.nome,
      categoria: curso.categoria
    });
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe({
        next: () => this.onSuccess(),
        error: () => this.onError()
      });
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso.', '', {
      duration: 5000
    });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', {
      duration: 5000
    });
  }

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field?.hasError('minlength')) {
      const tamanhoRequerido = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo precisa ser de ${tamanhoRequerido} caracteres.`;
    }

    if (field?.hasError('maxlength')) {
      const tamanhoRequerido = field.errors ? field.errors['maxlength']['requiredLength'] : 100;
      return `Tamanho máximo precisa ser de ${tamanhoRequerido} caracteres.`;
    }

    if (field?.hasError('required')) {
      return 'Campo Obrigatório';
    }

    return 'Campo Inválido';
  }
}
