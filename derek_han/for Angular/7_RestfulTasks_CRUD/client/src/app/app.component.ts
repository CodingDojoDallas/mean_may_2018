import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Restful Tasks API';
  tasks: any = [];
  task = "";
  newTask: any;
  editTask: any;
  isEdit: boolean= false;
  
  constructor(private _httpService: HttpService){

  }

  ngOnInit(){
  	this.getTasksFromService();

        //without data
    this.newTask = { title: "", description: "" }

      // initialize data already
    // this.newTask = {title: "Learn Angular Forms", description: "Two way binding is awesome!"}
    this.editTask = {title: "", description: ""}
  	// this.editTask = {title: "data.title", description: "data.description"}
  }

  getTasksFromService(){
  	let observable = this._httpService.getTasks()
  	observable.subscribe(data => {
  		console.log("Got our data!", data)
      this.tasks = data;
      
  	})
  }

  onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newTask = { title: "", description: "" }
    })
  }

  toggleEdit(task){

    // this.editTask._id = task._id;
    console.log(task._id);
    this.editTask = {_id: task._id, title: task.title, description: task.description}
    this.isEdit = !this.isEdit;
  }

  delete(task){
    let observabel = this._httpService.deleteTasks(task);
    observabel.subscribe(data => {
      console.log("Delete data form database", task)
    })
  }

  onEditSubmit(editTask){
    console.log(this.editTask, "in Edit");
    let observabel = this._httpService.editTasks(this.editTask);
    observabel.subscribe(data => {
      console.log("Edit data form database", data)
      this.editTask = { title: this.editTask.title, description: this.editTask.description}
      console.log("After Edit data form database", this.editTask)
    })
  }

}
