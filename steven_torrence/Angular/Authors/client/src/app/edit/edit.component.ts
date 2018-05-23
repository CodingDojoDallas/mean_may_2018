import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { AuthorsService } from '../authors.service';
import { Author } from '../task';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  thisAuthor: Author;
  errors: string[];

  constructor(private _authorsService: AuthorsService){
    this.thisAuthor = new Author();
  }

  ngOnInit() {
    this.thisAuthor = this._authorsService.author
    console.log(this.thisAuthor)
    this.errors;
  }

  editAuthor(thisAuthor, e): void {
    e.preventDefault();
    this._authorsService.author = thisAuthor;
    let observable = this._authorsService.updateAuthor(this.thisAuthor);
    observable.subscribe(
      // Callback
      (author) => {
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
