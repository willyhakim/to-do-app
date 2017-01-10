import { Component } from '@angular/core';
import { Todo } from './todos/shared/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Array<Todo>;
  constructor(){
  	this.todos = [
  		new Todo("Prepare for phase1", "Clear declaration of what's happening", "William",false),
  		new Todo("My Todo Item 1", "My Todo 1 Description", "Sebastian", false),
		new Todo("My Todo Item 2", "My Todo 2 Description", "Sebastian", false),
		new Todo("My Todo Item 3", "My Todo 3 Description", "Sebastian", false)
  	];
  }
}