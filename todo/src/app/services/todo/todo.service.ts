import { Injectable } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item.models';
import { TodoList } from 'src/app/models/todo-list.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  L_KEY_TODO_LIST = 'todo-list';
  todoListsArray: TodoList [] = [];
  constructor() {
    
   }

   getTodoLists() {
    const todoListString = localStorage.getItem(this.L_KEY_TODO_LIST);
    if (todoListString){
      this.todoListsArray = JSON.parse(todoListString);
    }else {
      this.todoListsArray = [];
    }
    return this.todoListsArray;
   }

   addList(listName){
    this.todoListsArray.push(new TodoList(listName));
    localStorage.setItem(this.L_KEY_TODO_LIST,JSON.stringify(this.todoListsArray));
   }

   addListItem(listId, itemName){
    const listObject = this.todoListsArray.filter(listItem => listItem.id === listId)[0];
    listObject.todos.push(new TodoItem(itemName));
    localStorage.setItem(this.L_KEY_TODO_LIST, JSON.stringify(this.todoListsArray));
   }
}
