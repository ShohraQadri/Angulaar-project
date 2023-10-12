import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  inputValue: string = '';
  list: any[] = [];
  myfun() {

    this.list.push({ id: this.list.length, name: this.inputValue });
    console.log(this.list)
  }
  removebutton(id: number) {
    alert('hii')
  }
}
