import { Component,EventEmitter,Output } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})

export class AddTodoComponent {
    title!:string;
    desc!:string;
    @Output() todoAdd:EventEmitter<Todo>=new EventEmitter();
    onSubmit(){
      const todo={
        sno:8,
        title:this.title,
        desc:this.desc,
        active:true
      }
      this.todoAdd.emit(todo);
    }
}
