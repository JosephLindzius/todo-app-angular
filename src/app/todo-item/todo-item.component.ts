import { Component, Input, EventEmitter, Output } from '@angular/core';
import {ITodo} from "../types";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input('item') todo!: ITodo;

  @Output()
  someoneClickedOnMe: EventEmitter<ITodo> = new EventEmitter();


  removeItemFromChild(todo: ITodo) {
    this.someoneClickedOnMe.emit(todo);
  }
}
