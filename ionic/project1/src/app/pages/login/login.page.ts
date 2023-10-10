import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  myform: any;
  postData = {
    username: '',
    password: ''
  };
  constructor() { }

  ngOnInit() {
  }
  onClick(param: any) {
    console.log("param === ", this.postData);


  }
}
