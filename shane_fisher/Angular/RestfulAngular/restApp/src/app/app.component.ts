import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Angular';
  tasks = [];
  task = [];
  selectedTask = [];
  newTask: any;
  constructor(private _httpService: HttpService) {

   }
   ngOnInit() {
    this.newTask = {title: "", description: ""}
   }

   onSubmit() {
     let observable = this._httpService.addTask(this.newTask);
     observable.subscribe(data => {
       console.log("Got data from post back", data);
       this.newTask = {title: "", description: ""}
     })
   }

    onEdit() {
      let observable = this._httpService.editTask(this.task);
      observable.subscribe(data => {
        console.log("Got data from post back", data);
      })
    }

    getTasksFromService() {
      let observable = this._httpService.getTasks()
      observable.subscribe(data => {
        this.tasks = data['data'];
      })
    }

    getEditTask(_id) {
      let observable = this._httpService.getOneTask(_id);
      observable.subscribe(data => {
        this.task = data['data'];
      })
    }

    taskToShow(_id) {
      let observable = this._httpService.getOneTask(_id);
      observable.subscribe(data => {
        this.selectedTask = data['data'];
      })
    }



    destroyTask(_id) {
      let observable = this._httpService.deleteTask(_id);
      observable.subscribe(data => {
        this.task = data['data'];
      })
    }

   
}
