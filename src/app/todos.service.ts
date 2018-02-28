import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {

  todos = [];
  name = '';

  addTodo() {
    this.todos.push(this.name);
  }

  constructor() { }

}
