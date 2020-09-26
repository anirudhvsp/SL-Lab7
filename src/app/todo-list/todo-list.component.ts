import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title : string ="Todo List";
  todol : todos[]=[
    {element : "Todo Item 1"},
    {element : "Todo Item 2"},
    {element : "Todo Item 3"},
    {element : "Todo Item 4"},
  ]
}
class todos{
  element : string;
}