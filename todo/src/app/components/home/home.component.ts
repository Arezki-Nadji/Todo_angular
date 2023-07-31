import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/models/todo-list.models';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  todoListsArray: TodoList[];
  selectedTodoList: TodoList;
  
  constructor(
    private todoService : TodoService
  ) {}

  ngOnInit(): void {
    this.todoListsArray = this.todoService.getTodoLists();
    this.selectedTodoList = this.todoListsArray[0];
  }

  selectTodoList(todoList)
  {
    this.selectedTodoList = todoList;
  }
}
