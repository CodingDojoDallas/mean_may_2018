import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  author;
  constructor(private _http: HttpClient){}

  getAuthors(){
    return this._http.get('/authors');
  }

  createAuthors(author){
    return this._http.post('/authors', author);
  }

  updateAuthor(thisAuthor) {
    return this._http.patch(`/authors/${thisAuthor._id}`, thisAuthor);
  }

  deleteAuthor(thisAuthor){
    return this._http.delete(`/authors/${thisAuthor._id}`, thisAuthor);
  }

}
