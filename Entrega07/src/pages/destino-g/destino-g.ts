/* Autor: Nathalia Nogueira Torres RA: 816114445 */ 

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Genero } from '../../model/genero';


@IonicPage()
@Component({
  selector: 'page-destino-g',
  templateUrl: 'destino-g.html',
})
export class DestinoGPage {
  public genero:Genero;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.genero = this.navParams.get("generoSelecionado");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinoGPage');
  }

}
