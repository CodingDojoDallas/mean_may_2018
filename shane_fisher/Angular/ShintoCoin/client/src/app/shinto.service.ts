import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShintoService {
  totalCoins = 0;
  availableCoins = 0;
  personalCoins = 0;
  shintoValue = 1;
  transactions = [];
  trans: any;


  constructor() { }

  coinTransaction(action, qty): void {
    let innerID = Math.floor(1 + Math.random() * (9999 - 1));
    let transaction = {
      id: innerID,
      action: action,
      qty: qty,
      value: this.shintoValue
    }
    this.transactions.push(transaction);
  }

  buyCoin(qty): void {
    if (this.availableCoins >= qty) {
      this.availableCoins -= qty;
      this.personalCoins += qty;
      this.shintoValue += qty;
      this.coinTransaction('Bought', qty)
    } else {
      console.log('Not enough coins');
    }
  };

  sellCoin(qty): void {
    if (this.personalCoins >= qty) {
      this.availableCoins += qty;
      this.personalCoins -= qty;
      this.shintoValue -= qty;
      this.coinTransaction('Sold', qty)
    } else {
      console.log('Not enough coins');
    }
  };

  findTransaction(id) {
    this.trans = this.transactions.find(o => o.id == id);
  }

}
