import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Genero } from '../../model/genero';
import { DestinoGPage } from '../destino-g/destino-g';



@IonicPage()
@Component({
  selector: 'page-genero',
  templateUrl: 'genero.html',
})
export class GeneroPage {
  public generos:Genero[];

  constructor(public navCtrl: NavController) {
  var g1 = {nome: 'Terror', descricao:'Terror ou Horror é um gênero de filmes que procura uma reação emocional negativa dos espectadores.'}
  var g2 = {nome: 'Ação', descricao:'Um filme de ação é um gênero de filme que geralmente envolve uma história de protagonistas do bem contra antagonistas do mal.'}
  var g3 = {nome: 'Comédia', descricao:'Uma comédia cinematográfica é um filme com humor ou que pretende provocar o riso da audiência. '}
  var g4 = {nome: 'Drama', descricao:'Peça teatral ou filme de caráter "sério", não cômico.'}
  var g5 = {nome: 'Ficção Científica', descricao:'Gênero da ficção especulativa, que normalmente lida com conceitos ficcionais e imaginativos, relacionados ao futuro, ciência e tecnologia.'}  
  this.generos = [g1, g2, g3, g4, g5];
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneroPage');
  }

  irParaDestino(genero:Genero):void{
    this.navCtrl.push(DestinoGPage, {generoSelecionado: genero});
    }

  

}
