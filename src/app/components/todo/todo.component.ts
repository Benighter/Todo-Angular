import { Component } from '@angular/core';
import { Todo } from '../../model/todo.model';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: Todo[] = [
    {id: 1, description: "eat food", done: true},
    {id: 2, description: "sleep", done: false}
  ];
}
