import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
	history:any[];
  constructor(private _http: HttpService) { 
  	this.history = this._http.history
  }

  ngOnInit() {
  }

}
