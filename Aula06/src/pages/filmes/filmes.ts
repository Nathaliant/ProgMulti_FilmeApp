import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/filmes';
import { DestinoPage } from '../destino/destino';


@IonicPage()
@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
})
export class FilmesPage {

  public filmes:Filme[];


  constructor(public navCtrl: NavController) {
    var f1 = {nome: 'Venom', genero:'Ação'};
    var f2 = {nome: 'A Freira', genero:'Terror'};
    var f3 = {nome: 'Toy Store', genero:'Ação'};
    var f4 = {nome: 'Homem sem rumo', genero:'Ação'};
    var f5 = {nome: 'UP - Altas Aventuras', genero:'Aventura'};
    var f6 = {nome: 'Venom', genero:'Ação'};

    this.filmes= [f1, f2, f3, f4, f5, f6];
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmesPage');
  }

  irParaDestino(filme:Filme):void{
    this.navCtrl.push(DestinoPage, {filmeSelecionado: filme});
    }

}
