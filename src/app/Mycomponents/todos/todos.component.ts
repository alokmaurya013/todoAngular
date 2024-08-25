import { Component, Inject, PLATFORM_ID} from '@angular/core';
import {Todo} from "../../Todo";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,TodoItemComponent,AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  localItem!:string|null;
   todos:Todo[];
   constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.localItem = localStorage.getItem('todos');
    } else {
      this.localItem = null;
    }

    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }
  deleteTodo(todo:Todo){
     const index=this.todos.indexOf(todo)
     this.todos.splice(index,1);
     localStorage.setItem("todo",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    this.todos.push(todo);
    localStorage.setItem("todo",JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo){
     const ind=this.todos.indexOf(todo);
     this.todos[ind].active=!this.todos[ind].active;
     localStorage.setItem("todo",JSON.stringify(this.todos));
  }
}
