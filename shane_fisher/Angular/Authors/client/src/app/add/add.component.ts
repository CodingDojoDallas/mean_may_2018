import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newAuthor =  { name: "" }
  error = {}

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.newAuthor = { name: ""}
  }
  
  onSubmit(): void {
    let observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe(data =>{
      this.newAuthor = {name: ""};
      this.router.navigate(['/']);
    })
  }

}
