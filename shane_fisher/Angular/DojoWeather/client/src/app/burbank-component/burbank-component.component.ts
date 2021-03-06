import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank-component',
  templateUrl: './burbank-component.component.html',
  styleUrls: ['./burbank-component.component.css']
})
export class BurbankComponentComponent implements OnInit {
  weather: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeatherFromService('Burbank');
  }

  getWeatherFromService(city) {
    let observable = this._httpService.getWeather(city)
    observable.subscribe(data => {
      this.weather = data;
      this.convertToF();
    })
  }

  convertToF() {
    this.weather.main.temp = Math.floor((9 / 5) * (this.weather.main.temp - 273) + 32);
    this.weather.main.temp_max = Math.floor((9 / 5) * (this.weather.main.temp_max - 273) + 32);
    this.weather.main.temp_min = Math.floor((9 / 5) * (this.weather.main.temp_min - 273) + 32);
  }
}