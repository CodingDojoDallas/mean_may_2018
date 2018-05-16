import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather: any = {}

  constructor(private _weatherService: WeatherService) {}

  ngOnInit(){
    this.getWeatherBurbank()
  }

  getWeatherBurbank(){
    let observable = this._weatherService.allWeatherBurbank();
    observable.subscribe((weather) => {
      this.weather = weather;
      console.log('Here is weather for burbank', this.weather);
    });
  }

}
