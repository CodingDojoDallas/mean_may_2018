import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getPokemon();
    this.getAbility();
  }
  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/25/');
    bulbasaur.subscribe((data: any) => 
      console.log(`My favorite pokemon is called ${data.name}. He has a cool move called ${data.moves[2].move.name}!`, data));
  }

  getAbility(){
    let ability = this._http.get('https://pokeapi.co/api/v2/ability/31/');
    ability.subscribe((data: any) =>
    console.log(`Pikachu has an ability called ${data.name}. ${data.pokemon.length-1} other pokemon have this ability too!`, data));
  }
}
