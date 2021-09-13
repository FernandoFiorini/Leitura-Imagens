import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { TabelaNutricionalPage } from '../tabela-nutricional/tabela-nutricional.page'
import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [Camera]
})
export class Tab1Page {

  public teste = [{
    a: 'teste'
  }, {
    a: 'teste'
  }]

  public jsonLegume = [{
    nomeLegume: "Pepino",
    valorEnergetico: 15,
    carboidrato: 10,
    proteina: 10,
    gorduraTotal: 10,
    gorduraSaturada: 10,
    gorduraTrans: 10,
    fibraAlimentar: 10,
    sodio: 120
  }, {
    nomeLegume: "Pepino",
    valorEnergetico: 15,
    carboidrato: 10,
    proteina: 10,
    gorduraTotal: 10,
    gorduraSaturada: 10,
    gorduraTrans: 10,
    fibraAlimentar: 10,
    sodio: 120
  }];

  constructor(private camera: Camera, private router: Router) { }

  abrirCamera() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    }

    this.camera.getPicture(options).then((imageData) => {



      this.router.navigate(['tabela-nutricional', { item: JSON.stringify(this.jsonLegume) }]);


    }, (err) => {

      this.router.navigate(['tabela-nutricional', { item: JSON.stringify(this.jsonLegume) }]);
    });
  }




}
