import { Component, OnInit } from '@angular/core';

import { Todo } from './shared/todo.model';

@Component({
  selector: 'app-todo-item',
  inputs: ['todo'],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  todo: Todo;		
  constructor() { }

}
