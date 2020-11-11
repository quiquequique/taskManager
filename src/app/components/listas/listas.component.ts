import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( IonList ) lista: IonList;
  @Input() terminada: boolean;

  constructor( public deseosService: DeseosService,
               private router: Router,
               private alertCtrl: AlertController  ) { }

  ngOnInit() {}

  listaSeleccionada( lista: Lista){
    // console.log(lista);
    if ( this.terminada ) {

      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);

    }else{

      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);

    }

  }

  borrarLista( lista: Lista ){

    this.deseosService.borrarLista( lista );
  }

  // editLista( lista: Lista ){
//
  //   this.deseosService.editLista( lista );
  // }

  async editLista( lista: Lista ) {

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Editar Lista',
      inputs: [{
          name: 'titulo',
          type: 'text',
          value: lista.titulo
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            // console.log('Cancelar');
            this.lista.closeSlidingItems();   // el metodo viene del decorador ViewChild
          }
        },
        {
            text: 'Editar',
            handler: ( dataInput ) => {
              // console.log ( dataInput, 'marca' );
              if ( dataInput.titulo.length === 0 ) {
                return;
              }
              lista.titulo = dataInput.titulo;
              this.deseosService.saveStorage();
              this.lista.closeSlidingItems();   // el metodo viene del decorador ViewChild
            }
        }
      ]
    });

    await alert.present();
  }

}
