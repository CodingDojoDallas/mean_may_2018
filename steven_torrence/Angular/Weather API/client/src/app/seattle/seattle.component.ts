import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  constructor(private _weatherService: WeatherService) {}

  weather: any = {}

  ngOnInit() {
    this.getWeatherSeattle()
  }

  getWeatherSeattle() {
    let observable = this._weatherService.allWeatherSeattle();
    observable.subscribe((weather) => {
      this.weather = weather;
      console.log('Here is weather for Chicago', this.weather);
    });
  }

}
