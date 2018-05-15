import { Component, OnInit } from '@angular/core';
import {HttpService } from '../http.service'
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
	event:any;
	idx:any;
  constructor(private _http:HttpService, private _route: ActivatedRoute) {
  	this._route.params.subscribe((params: Params) => {this.idx=params['id'] })
   	this.event = this._http.history[this.idx]
  }
  ngOnInit() {}

}
