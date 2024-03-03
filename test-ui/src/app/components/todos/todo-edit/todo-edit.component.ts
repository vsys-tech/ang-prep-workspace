import {Component, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TodoService} from "../../../services/todo.service";
import {TodoModel} from "../../../model/todo.model";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-todo-edit',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule
  ],
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.css'
})
export class TodoEditComponent {

  model = new TodoModel('', '', '', '', '', '');
  todoService = inject(TodoService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  onSubmit() {
    console.log(this.model);
    this.todoService.addTodo(this.model);
    this.onReset();
    this.router.navigate(["/todos"]);
  }

  onReset() {
    this.model =
      new TodoModel('', '', '', '', '', '');
  }

}
