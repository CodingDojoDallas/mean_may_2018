import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  transaction: any;

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
  }


}
