import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {

    this.loadStorage();

    // console.log(' Servicio inicializado ');

    // const lista1 = new Lista('Lista Super');
    // const lista2 = new Lista('Lista Verduleria');

    // this.listas.push( lista1, lista2 );

    // console.log(this.listas);
  }

  crearLista( titulo: string ) {

    const nuevaLista = new Lista(titulo);
    this.listas.push( nuevaLista );
    this.saveStorage();

    return nuevaLista.id;

  }

  borrarLista( lista: Lista ){

    this.listas = this.listas.filter( listElement => {
      return listElement.id !== lista.id;
    });

    this.saveStorage();

  }


  obtenerLista( id: string | number) {

    id = Number(id);

    return this.listas.find( listaArrElement => {
      return listaArrElement.id === id;
    });
  }

  saveStorage() {
    localStorage.setItem( 'data', JSON.stringify( this.listas ) );
  }

  loadStorage() {
    if ( localStorage.getItem( 'data' ) ){
      this.listas = JSON.parse( localStorage.getItem( 'data' ) );
    }else{
      this.listas = [];
    }
  }
}

