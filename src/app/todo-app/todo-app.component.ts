import {Component, ElementRef, ViewChild} from '@angular/core';
import { v4 } from 'uuid';
import {ITodo} from "../types";

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
})
export class TodoAppComponent {
  inputValue: string = 'Learn Angular';
  todos: ITodo[] = [];

  @ViewChild('inputTodo')
  input!: ElementRef<HTMLInputElement>

  ngAfterViewInit(){
    this.input.nativeElement.focus();
    console.log('onAfterViewInit')
  }

  onClick() {
    if (this.input.nativeElement.value){
      const todo: ITodo = {
        uuid: v4().toString(),
        label: this.input.nativeElement.value
      }
      this.todos.push(todo);
      this.input.nativeElement.value = '';
    }
  }

  removeItem(todo: ITodo) {
    this.todos = this.todos.filter((item) => item !== todo);
  }
}
