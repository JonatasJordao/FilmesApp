import { IListaGenero } from './../models/IGenero.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {


  lingua = 'pt-BR';
  private apiURl = 'https://api.themoviedb.org/3/';
  private key = '?api_key=962806046f41fe0acdd16da197a4c37e';

  constructor( private http: HttpClient, public toastController: ToastController) { }


  buscarGeneros(): Observable<IListaGenero>{
    const url = `${this.apiURl}genre/movie/list${this.key}&language=${this.lingua}`;

    return this.http.get<IListaGenero>(url).pipe(
      map(retorno=> retorno),
      catchError(erro=> this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API.',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
  }

