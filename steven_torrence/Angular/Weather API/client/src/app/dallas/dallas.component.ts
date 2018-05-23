import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  constructor(private _weatherService: WeatherService){}

  weather: any = {}

  ngOnInit() {
    this.getWeatherDallas()
  }

  getWeatherDallas() {
    let observable = this._weatherService.allWeatherDallas();
    observable.subscribe((weather) => {
      this.weather = weather;
      console.log('Here is weather for Dallas', this.weather);
    });
  }

  

}
