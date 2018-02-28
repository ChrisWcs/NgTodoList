import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodosService } from './todos.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoInputComponent } from './todo-input/todo-input.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoInputComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
