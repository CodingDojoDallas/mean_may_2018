import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washington-component',
  templateUrl: './washington-component.component.html',
  styleUrls: ['./washington-component.component.css']
})
export class WashingtonComponentComponent implements OnInit {
  weather: any;
  minTemp = Number;
  maxTemp = Number;
  avgTemp = Number;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeatherFromService('Washington');
  }

  getWeatherFromService(city) {
    let observable = this._httpService.getWeather(city)
    observable.subscribe(data => {
      this.weather = data;
      this.convertToF();
    })
  }

  convertToF() {
    this.weather.main.temp = Math.floor((9/5)*(this.weather.main.temp - 273)+32);
    this.weather.main.temp_max = Math.floor((9 / 5) * (this.weather.main.temp_max - 273) + 32);
    this.weather.main.temp_min = Math.floor((9 / 5) * (this.weather.main.temp_min - 273) + 32);
  }


}
