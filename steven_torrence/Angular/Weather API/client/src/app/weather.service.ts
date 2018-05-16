import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient){}

  allWeatherBurbank(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Burbank&APPID=5a926c63f857aceb01c98fd53f303c01')
  }

  allWeatherChicago() {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=5a926c63f857aceb01c98fd53f303c01')
  }

  allWeatherDC() {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=washington&dc&APPID=5a926c63f857aceb01c98fd53f303c01')
  }

  allWeatherDallas() {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=dallas&APPID=5a926c63f857aceb01c98fd53f303c01')
  }

  allWeatherSanjose() {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=san&jose&APPID=5a926c63f857aceb01c98fd53f303c01')
  }

  allWeatherSeattle() {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=seattle&APPID=5a926c63f857aceb01c98fd53f303c01')
  }
}
