/* Autor: Nathalia Nogueira Torres RA: 816114445 */  

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/filmes';
import { DestinoPage } from '../destino/destino';
import { MovieProvider } from '../../providers/movie/movie';


@IonicPage()

@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
  providers: [
    MovieProvider
  ]
})
export class FilmesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private movieProvider: MovieProvider) {

  }

  ionViewDidLoad() {
    this.movieProvider.getPopularMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )

  }
}
