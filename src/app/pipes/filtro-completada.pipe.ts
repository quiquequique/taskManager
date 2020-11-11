import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletada',
  pure: false
})
export class FiltroCompletadaPipe implements PipeTransform {

  transform( listas: Lista[], completada: boolean = true): Lista[] {

    return listas.filter( lista => {
      return lista.terminada === completada;
    });

  }

}
