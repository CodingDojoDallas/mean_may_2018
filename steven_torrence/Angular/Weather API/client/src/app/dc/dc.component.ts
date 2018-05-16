import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  constructor(private _weatherService: WeatherService) {}

  weather: any = {}

  ngOnInit() {
    this.getWeatherDC()
  }

  getWeatherDC() {
    let observable = this._weatherService.allWeatherDC();
    observable.subscribe((weather) => {
      this.weather = weather;
      console.log('Here is weather for DC', this.weather);
    });
  }

}
