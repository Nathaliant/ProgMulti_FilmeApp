/* Autor: Nathalia Nogueira Torres RA:816114445 */ 

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FilmeProvider } from '../../providers/filme/filme';
import { Filme } from '../../model/filme';

@IonicPage()
@Component({
  selector: 'page-atualiza-filme',
  templateUrl: 'atualiza-filme.html',
})
export class AtualizaFilmePage {
 public filme:Filme;
  constructor(public navCtrl: NavController, public navParams: NavParams,public filmeProvider: FilmeProvider,
    public toastCtrl: ToastController) {
      this.filme=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtualizaFilmePage');
  }

  public atualizaFilme (){
    this.filmeProvider.atualizar(this.filme).then(
    ()=>{
    this.exibirToast ("Cliente atualizado com sucesso");
    this.navCtrl.pop();
    }
    );
    }

    exibirToast(dados) {
      let t = this.toastCtrl.create({
      message: dados,
      duration: 3000,
      position: "top"
      });
      t.present();
      }

}
