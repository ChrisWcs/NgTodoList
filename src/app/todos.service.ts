import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {

  todos = ['work', 'computer'];

  addTodo(name) {
    this.todos.push(name);
  }

  constructor() { }

}
