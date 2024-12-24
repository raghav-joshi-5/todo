import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../module/todo';
import { todoArr } from '../const/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  generateUuid() {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === 'x' ? random : (random & 0x3) | 0x8;

        return value.toString(16);
      }
    );
  }

  todoArray: Array<Itodo> = todoArr;
  @ViewChild('todoItem') todoItem!: ElementRef;

  addtodoItem() {
    const todoText = this.todoItem.nativeElement.value.trim(); // Get the value and remove leading/trailing spaces

    if (todoText === '') {
      // If the value is empty, do not add the todo item and optionally show a message
      alert('Please enter a todo item!');
      return;
    }

    let newTodo: Itodo = {
      todoItem: this.todoItem.nativeElement.value,
      todoId: this.generateUuid(),
    };

    console.log(newTodo);
    this.todoArray.push(newTodo);

    this.todoItem.nativeElement.value = '';
  }
  constructor() {}

  ngOnInit(): void {}
}
