import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {

  todos = [];

  addTodo(name) {
    this.todos.push(name);
  }

  constructor() { }

}
