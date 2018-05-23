import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gold = 0;
  log = [];

  constructor(private _httpService: HttpService) { 

  }

  farmGold(): void {
    let sum = Math.floor(2 + Math.random() * (6 - 2));
    this.gold += sum;
    this.log.unshift(`You earned ${sum} gold at the farm!`)
  };

  caveGold(): void {
    let sum = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    this.gold += sum;
    this.log.unshift(`You earned ${sum} gold at the cave!`)
  };

  houseGold(): void {
    let sum = Math.floor(Math.random() * (15 - 7 + 1)) + 7;
    this.gold += sum;
    this.log.unshift(`You earned ${sum} gold at the house!`)
  };

  casinoGold(): void {
    let sum = Math.floor(Math.random() * 199) - 99;
    this.gold += sum;
    if (sum < 0) {
      this.log.unshift(`You lost ${sum} gold at the casino!`);
    } else {
      this.log.unshift(`You won ${sum} gold at the casino!`)
    }  
  };
}
