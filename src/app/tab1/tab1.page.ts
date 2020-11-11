import { Component } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  // listasF: any[] = [];

  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertCtrl: AlertController ) {

    // this.listasF = deseosServive.listas;      !!ya viene definido del service no es necesario declararla de nuevo

  }
    async agregarLista() {

      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Nueva Lista',
        inputs: [{
            name: 'titulo',
            type: 'text',
            placeholder: 'Nombre de la lista'
        }],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancelar');
            }
          },
          {
              text: 'Crear',
              handler: ( dataInput ) => {
                console.log ( dataInput );
                if ( dataInput.titulo.length === 0 ) {
                  return;
                }else{
                  const listaId = this.deseosService.crearLista( dataInput.titulo );
                     // aca se crea la lista nueva y redireccionar a
                     // this.router.navigateByUrl('/tabs/tab1/agregar');
                  this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
                }
              }
          }
        ]
      });

      await alert.present();
    }


}
