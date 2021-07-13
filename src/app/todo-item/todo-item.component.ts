import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input('item') todo = '';

  @Output()
  someoneClickedOnMe: EventEmitter<string> = new EventEmitter();

  removeItemFromChild(todo: string) {
    this.someoneClickedOnMe.emit(todo);
  }
}
