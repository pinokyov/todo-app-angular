import { Component } from '@angular/core';
import {Task, TodoItem } from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Task();

  isDisplay = false;

  getAppTitle(){
    return this.model.title;
  }

  getTasks(){
    if (this.isDisplay)
    {
        return this.model.tasks;
    }
    return this.model.tasks.filter( task => !task.action );
  }

  addTask(value){
    if (value != ''){
      this.model.tasks.push(new TodoItem(value,false));
    }
  }
}
