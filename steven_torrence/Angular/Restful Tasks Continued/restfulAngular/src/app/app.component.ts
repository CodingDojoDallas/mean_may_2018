import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Restful Tasks API';
  subtitle: string = 'All of the tasks:'
  subtitle2: string = 'The third task:'
  tasks = [];
  constructor(private _httpService: HttpService) { }
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    this.getTasksFromService();
  }
  getTasksFromService(){
    this._httpService.getTasks();
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {console.log("Got our tasks!", data)
    this.tasks = data['tasks'];
    });
  }
}
