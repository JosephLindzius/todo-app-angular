import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ITodo} from "../types";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @ViewChild('editInput')
  editInput!: ElementRef<HTMLInputElement>

  @ViewChild('todoContainer')
  todoContainer!: ElementRef<HTMLBodyElement>

  @Input('item') todo!: ITodo;

  @Input()
  positionInfo?: string;

  @Output()
  someoneClickedOnMe: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  @Output()
  editButtonClicked: EventEmitter<ITodo> = new EventEmitter<ITodo>()

  @Output()
  savedButtonClicked: EventEmitter<ITodo> = new EventEmitter<ITodo>()

  @Output()
  todoPositionChanged: EventEmitter<ITodo> = new EventEmitter<ITodo>()

  edit: boolean = false;

  removeTodo(todo: ITodo): void {
    this.someoneClickedOnMe.emit(todo);
  }

  editTodo (todo: ITodo){
    this.editButtonClicked.emit(todo);
    this.edit = true;
  }

  saveTodo (todo: ITodo) {
    todo.label = this.editInput.nativeElement.value
    this.savedButtonClicked.emit(todo);
    this.edit = false;
  }

  savePosition(event: MouseEvent, todo: ITodo): void {
    this.todo.position = this.todoContainer.nativeElement.style.transform;
    console.log(this.todo.position)
    this.todoPositionChanged.emit(todo)
    this.setPosition(todo)
  }

  setPosition(todo: ITodo){
    if (todo.position){
      if (this.positionInfo != null) {
        this.todoContainer.nativeElement.style.transform = this.positionInfo
      }
    }
  }
}
