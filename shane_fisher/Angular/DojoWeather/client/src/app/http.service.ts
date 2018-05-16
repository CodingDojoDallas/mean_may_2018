import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  weather: any;

  constructor(private _http: HttpClient) { }

    getWeather(city) {
      return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d3ec4ed15baab3319ddd51726a3dc9d5`)
    }

}
