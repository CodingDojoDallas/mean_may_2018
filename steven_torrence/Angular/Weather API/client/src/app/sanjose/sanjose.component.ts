import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  constructor(private _weatherService: WeatherService){ }

  weather: any = {}

  ngOnInit() {
    this.getWeatherSanjose()
  }

  getWeatherSanjose() {
    let observable = this._weatherService.allWeatherSanjose();
    observable.subscribe((weather) => {
      this.weather = weather;
      console.log('Here is weather for San Jose', this.weather);
    });
  }

}
