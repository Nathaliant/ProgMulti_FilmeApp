/* Autor: Nathalia Nogueira Torres RA:816114445 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';



@IonicPage()
@Component({
  selector: 'page-genero',
  templateUrl: 'genero.html',
  providers: [
    MovieProvider
  ]
})
export class GeneroPage {

  public generos = new Array<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider) {
  }

  ionViewDidLoad() {
    this.movieProvider.getGenres().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.generos = objeto_retorno.genres;
        console.log(this.generos);
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }
}