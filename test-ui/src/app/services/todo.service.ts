import {Injectable, signal, WritableSignal} from '@angular/core';
import {TodoModel} from "../model/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = signal<TodoModel[]>([]);

  constructor() {

  }

  addTodo(newTodo: TodoModel): void {
    this.todos.update(todo => [...todo, newTodo]);
  }

  findAll(): WritableSignal<TodoModel[]> {
    return this.todos;
  }

}
