import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: any = [];
  author: any = []
  
  constructor(private _authorsService: AuthorsService){}

  ngOnInit(){
    this.getAuthors();
  }

  getAuthors(){
    let observable = this._authorsService.getAuthors();
    observable.subscribe((authors) => {
      this.authors = authors;
      console.log(`Here are all of the authors ${authors}`);
    });
  }

  editAuthor(thisAuthor, e){
    this._authorsService.author = thisAuthor;
  }

  removeAuthor(thisAuthor, e){
    let observable = this._authorsService.deleteAuthor(thisAuthor);
    observable.subscribe((author) => {
      this.author = thisAuthor;
      // console.log(this.author);
      let tempob = this.authors.find(x => x._id == this.author._id);
      // console.log(tempob);
      let num = this.authors.indexOf(tempob);
      // console.log(num);
      this.authors.splice(num, 1);
    });
  }
}
