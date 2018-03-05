import { Component, OnInit } from '@angular/core';
import { MatList, MatListItem } from '@angular/material';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public todosService: TodosService) { }

  ngOnInit() {
  }

}
