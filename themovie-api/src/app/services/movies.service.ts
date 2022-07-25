import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey: string = '3c3a23cc5cf9a45c8ceac23ffa79b062';
  private urlMovieDb: string = 'https://api.themoviedb.org/3';
  constructor(private httpClient: HttpClient) {
  }

   // // Observable<Root> assim que chegar uma requisicao vai mapear o tipo Root
   getmovies(page: number): Observable<any> {
    let url = `${this.urlMovieDb}/movie/popular?api_key=${this.apiKey}&language=pt-BR&page=${page}`;
    // retorna o resultado da requisicao
    return this.httpClient.get<any>(url).pipe(retry(2));
  }
}
