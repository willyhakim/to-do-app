import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemComponent } from './todo-item.component';
import { TodosListComponent } from './todos-list.component';
import { AddTodoComponent } from './add-todo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoItemComponent, 
  				 TodosListComponent, 
  				 AddTodoComponent],
  exports: [AddTodoComponent, 
  			TodosListComponent]
})
export class TodosModule { }
