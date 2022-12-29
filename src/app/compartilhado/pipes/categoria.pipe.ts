import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(categoria: string): string {
    switch (categoria) {
      case 'Front':
        return 'code';
      case 'Back':
        return 'computer';
    }
    return 'code';
  }

}
