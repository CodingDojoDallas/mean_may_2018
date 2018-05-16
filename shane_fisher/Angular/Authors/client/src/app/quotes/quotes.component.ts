import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  authorList: any;
  selectedAuthor: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.showAllAuthors();
  }

  showAllAuthors(): void {
    let observable = this._httpService.getAuthors()
    observable.subscribe(data => {
      this.authorList = data['data'];
    })
  };

  destroyAuthor(_id) {
    let observable = this._httpService.deleteAuthor(_id);
    observable.subscribe(data => {
      this.selectedAuthor = this.authorList.find(x => x._id == _id);
      this.authorList.pop(this.selectedAuthor);
    })
  }

  

}
