/* Autor: Nathalia Nogueira Torres RA:816114445 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/filmes';
import { DestinoPage } from '../destino/destino';
import { MovieProvider } from '../../providers/movie/movie';
import { AdicionaFilmePage } from '../adiciona-filme/adiciona-filme';
import { ExibeFilmesPage } from '../exibe-filmes/exibe-filmes';


@IonicPage()


@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
  providers: [
    MovieProvider
  ]
})
export class FilmesPage {

  constructor(public navCtrl: NavController) {
  }
  
  cadastrarFilme() {
    this.navCtrl.push(AdicionaFilmePage);
  }

  exibirFilmes() {
    this.navCtrl.push(ExibeFilmesPage);
  }

}
