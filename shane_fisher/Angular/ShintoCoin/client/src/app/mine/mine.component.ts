import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  trivia: any;
  answers = [];
  result: string;

  constructor(private _httpService: HttpService, private _shintoService: ShintoService) { }

  ngOnInit() {
    this.getTrivia()
  }
  getTrivia() {
    let observable = this._httpService.getTrivia()
    observable.subscribe(data => {
      this.answers = [];
      this.trivia = data;
      this.answers.push(this.trivia.results[0].correct_answer);
      for (var idx of this.trivia.results[0].incorrect_answers) {
        this.answers.push(idx)
      }
      this.shuffle(this.answers);  
    })
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  triviaAnswer(answer) {
    if (answer == this.trivia.results[0].correct_answer) {
      this._shintoService.totalCoins += 1;
      this._shintoService.personalCoins += 1;
      this._shintoService.shintoValue += 1;
      this._shintoService.coinTransaction('Mined', 1)
      this.result = "Answer was correct. You generated 1 ShintoCoin"
      this.getTrivia();
    } else {
      this.result = "Answer was incorrect. No coins generated"
      this.getTrivia();
    }
  }
  


}
