import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  constructor(private _weatherService: WeatherService){ }

  weather: any = {}

  ngOnInit() {
    this.getWeatherChicago()
  }

  getWeatherChicago() {
    let observable = this._weatherService.allWeatherChicago();
    observable.subscribe((weather) => {
      this.weather = weather;
      console.log('Here is weather for Chicago', this.weather);
    });
  }
}
