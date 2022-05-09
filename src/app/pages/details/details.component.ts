import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlPokemonName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private PokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activeRoute.snapshot.params['id'];
    const pokemon = this.PokeApiService.getPokemon(`${this.urlPokemon}/${id}/`);
    const getPokemonSpecies = this.PokeApiService.getPokemon(
      `${this.urlPokemonName}/${id}/`
    );

    return forkJoin([pokemon, getPokemonSpecies]).subscribe((res) => {
      this.pokemon = res;
    });
  }
}
