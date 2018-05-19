import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { AuthorsService } from '../authors.service';
import { Author } from '../task';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  author: Author;
  errors: string[];
  
  constructor(private _authorsService: AuthorsService) { }

  ngOnInit() {
    this.author = new Author();
    this.errors = [];
  }

  createAuthor(e): void {
    e.preventDefault();
    let observable = this._authorsService.createAuthors(this.author);
    observable.subscribe(
      // Callback
      (author) =>{
        console.log(author);
      },
      // Errorback
      (err) => {
        this.errors = err.error;
        console.log(this.errors);
      }
    )
  }
}
