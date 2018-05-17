import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  abilities: any;
  pokemon: any;
  getPokemon() {
    let bulbasaur = this._http.get("https://pokeapi.co/api/v2/pokemon/1/");
    bulbasaur.subscribe(data => {
      console.log(data);
      this.abilities = data["abilities"];
      for (var x of this.abilities) {
        console.log(x.ability.name);
      }
    });
    let ability = this._http.get(
      "https://pokeapi.co/api/v2/ability/chlorophyll/"
    );
    ability.subscribe(data => {
      console.log(data);
      this.pokemon = data["pokemon"];
      for (var x of this.pokemon) {
        console.log(x.pokemon.name);
      }
    });
  }
}
