import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-ng',
  templateUrl: './basic-ng.page.html',
  styleUrls: ['./basic-ng.page.scss'],
})
export class BasicNgPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayval: any = '';
  myfun(val: any) {
    console.warn(val)
    this.displayval = val;
  }
  count = 0;
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
  color = "red";
  myclr() {
    this.color = "green"
  }
}
