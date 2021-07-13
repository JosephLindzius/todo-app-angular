import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'app-comp', //<app-comp></app-comp>
  template: `
    <h3>You have {{ todos.length }} todos.</h3>

    <input [value]="inputValue" (input)="onChange($event)" /><button
      (click)="onClick()"
    >
      Add Todo
    </button>

    <ul>
      <li *ngFor="let todo of todos">
        {{ todo }}
        <button>Delete</button>
      </li>
    </ul>
  `,
})
class TodoApp {
  inputValue: string = 'Learn Angular';
  todos: string[] = [];

  onClick() {
    this.todos.push(this.inputValue);
  }

  onChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputValue = value;
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [TodoApp],
  bootstrap: [TodoApp],
})
class ModuleA {}

platformBrowserDynamic().bootstrapModule(ModuleA);

// @Pipe({})
// class TPipe {}

// @Injectable()
// class ServiceA {}
