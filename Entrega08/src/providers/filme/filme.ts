/* Autor: Nathalia Nogueira Torres RA:816114445 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from '../../model/filme';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseeProvider } from '../databasee/databasee';


@Injectable()
export class FilmeProvider {

  constructor(private dbProvider: DatabaseeProvider) {
  }

  public inserir(filme: Filme) {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "INSERT INTO filme (titulo, genero) VALUES (?, ?)";
        let parametros = [filme.titulo, filme.genero];
        return db.executeSql(sql, parametros).
          catch((e) => {
            console.log(e);
          });
      }).catch((e) => {
        console.log(e);
      });
  }

  public listar() {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "SELECT titulo, genero FROM filme";
        return db.executeSql(sql, []).
          then((data: any) => {
            if (data.rows.length > 0) {
              let filmes: Filme[] = [];
              for (let i = 0; i < data.rows.length; i++) {
                filmes.push(data.rows.item(i));
              }
              return filmes;
            }
            else
              return [];
          });
      }).catch((e) => {
        console.log(e);
      });
  }


  public apagar(filme: Filme) {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "DELETE FROM filme WHERE id = ?";
        let param = [filme.id];
        return db.executeSql(sql, param);
      });
  }

  public atualizar(filme: Filme) {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "UPDATE filme SET titulo = ?, genero = ? WHERE id = ?";
        let param = [filme.titulo, filme.genero, filme.id];
        return db.executeSql(sql, param);
      });
  }

}
