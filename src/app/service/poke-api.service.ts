import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(private http: HttpClient) {}

  get listAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((resPokemon: any) => {
          this.getPokemon(resPokemon.url).subscribe(
            (res) => (resPokemon.status = res)
          );
        });
      })
    );
  }

  public getPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }
}
