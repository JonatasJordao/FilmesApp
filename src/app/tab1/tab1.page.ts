import { IListaFilmes } from './../models/IFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Filmes';
  listaVideos: IFilme[]= [
    {
      nome: 'O Esquadrão Suicida (2021)',
      lancamento: '05/08/2021',
      duracao:'2h 12m',
      classificacao: 80,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wTS3dS2DJiMFFgqKDz5fxMTri.jpg',
      generos:['Ação', 'Aventura', 'Fantasia', 'Comédia'],
      pagina: '/esquadrao-suicida'
    },
    {
      nome: 'Viúva Negra (2021)',
      lancamento: '08/07/2021',
      duracao:'2h 13m',
      classificacao: 78,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg',
      generos:['Ação', 'Aventura', 'Thriller', 'Ficção científica'],
      pagina: '/viuva-negra'
    },
    {
      nome: 'Luca (2021)',
      lancamento: '17/06/2021',
      duracao:'1h 41m',
      classificacao: 81,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9jPa6SlUYxPFMVZlEuceiPPAA15.jpg',
      generos:['Animação', 'Comédia', 'Família', 'Fantasia'],
      pagina: '/luca'
    },
    {
      nome: 'Liga da Justiça de Zack Snyder (2021)',
      lancamento: '18/03/2021',
      duracao:'4h 2m',
      classificacao: 84,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg',
      generos:['Ação', 'Aventura', 'Fantasia', 'Ficção científica'],
      pagina: '/liga-justica'
    },
    {
      nome: 'Godzilla vs. Kong (2021)',
      lancamento: '01/04/2021',
      duracao:'1h 53m',
      classificacao: 79,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wllzjZxg4ynlAm5xmOICJ2uHOPJ.jpg',
      generos:['Ação', 'Aventura', 'Fantasia'],
      pagina: '/kong'
    }

  ];

  listaFilmes: IListaFilmes;

  constructor(
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public route: Router
  ) {}


buscarFilmes(evento: any){
  console.log(evento.target.value);
  const busca = evento.target.value;
  if(busca && busca.trim() !== ''){
    this.filmeService.buscarFilmes(busca).subscribe(dados=>{
      console.log(dados);
      this.listaFilmes = dados;
    });
  }
}

  exibirFilme(filme: IFilme){
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }


}
