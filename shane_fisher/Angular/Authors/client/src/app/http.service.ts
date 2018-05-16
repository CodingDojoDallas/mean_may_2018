import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  author: any;

  constructor(private _http: HttpClient) { }

  getAuthors() {
    return this._http.get('/authors')
  }

  addAuthor(newauthor) {
    return this._http.post('/addauthor', newauthor)
  }

  editAuthor(author) {
    return this._http.put('authors/'+author._id+'/edit', author)
  }

  getOneAuthor(author_id) {
    let observable = this._http.get('/authors/' + author_id);
    observable.subscribe(data => {
      this.author = data['data'];
    })
  };

  deleteAuthor(author_id) {
    return this._http.delete('/authors/' + author_id)
  };



}
