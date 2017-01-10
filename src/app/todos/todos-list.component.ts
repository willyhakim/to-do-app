import { Component, OnInit } from '@angular/core';
import { Todo } from './shared/todo.model';

@Component({
  selector: 'app-todos-list',
  inputs:['todos'],
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {
	todos: Array<Todo>;

  constructor() { }

}
