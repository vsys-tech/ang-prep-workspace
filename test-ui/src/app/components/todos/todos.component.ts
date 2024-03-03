import {Component, inject, OnInit, signal} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {TodoModel} from "../../model/todo.model";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{


  todoService = inject(TodoService);
  todos =  signal<TodoModel[]>([]);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.todos = this.todoService.todos;
  }

  onSelect(index: number) {
    let todo = this.todos().at(index);
  }

  onAdd(): void{
      this.router.navigate(["/newTodo"]);
  }


}
