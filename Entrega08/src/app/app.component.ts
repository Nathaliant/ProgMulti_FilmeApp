/* Autor: Nathalia Nogueira Torres RA:816114445 */

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FilmesPage } from '../pages/filmes/filmes';
import { TabsPage } from '../pages/tabs/tabs';
import { DatabaseeProvider } from '../providers/databasee/databasee';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbProvider: DatabaseeProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      dbProvider.createDatabase().then(() => {
        this.abrirHomePage(splashScreen);
      }).catch((e) => {
        console.log(e);
        this.abrirHomePage(splashScreen);
      });
    });
  }
  private abrirHomePage(splashScreen: SplashScreen) {
    splashScreen.hide();
    this.rootPage = TabsPage;
  }
}

