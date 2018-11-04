/* Autor: Nathalia Nogueira Torres RA:816114445 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibeFilmesPage } from './exibe-filmes';

@NgModule({
  declarations: [
    ExibeFilmesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExibeFilmesPage),
  ],
})
export class ExibeFilmesPageModule {}
