import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {

  todos = [];
  name = '';

  addTodo() {
    this.todos.push(this.name);
    this.name = '';
  }

  removeTodo(index) {
    this.todos = [ ...this.todos.slice( 0, index), ...this.todos.slice( index + 1)];
  }

  constructor() { }

}
