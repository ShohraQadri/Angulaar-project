import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginform: FormGroup | any

  constructor(
    // public FormBuilder: FormBuilder;
  ) { }

  ngOnInit() {
    this.loginform
  }

}
