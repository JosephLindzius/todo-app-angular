import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
})
export class TodoAppComponent {
  inputValue: string = 'Learn Angular';
  todos: string[] = [];

  onClick() {
    this.todos.push(this.inputValue);
  }

  onChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputValue = value;
  }

  removeItem(todo: any) {
    console.log(todo);
    this.todos = this.todos.filter((item) => item !== todo);
  }
}
