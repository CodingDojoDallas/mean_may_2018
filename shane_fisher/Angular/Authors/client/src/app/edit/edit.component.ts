import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  

  onEdit() {
    let observable = this._httpService.editAuthor(this._httpService.author);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
    })
  };


}
