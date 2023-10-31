import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.page.html',
  styleUrls: ['./update-todo.page.scss'],
})
export class UpdateTodoPage implements OnInit {
  toastController: any;
  inputValue: string = '';
  list: any[] = [];
  updateName: any;
  // isEdit: any = false;
  inputName: any;
  dataFromParent: any;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {
    this.dataFromParent = this.navParams.get('data');
    console.log('this.dataFromParent === ', this.dataFromParent);
    this.inputValue = this.dataFromParent.name;
  }

  ngOnInit() {}

  update(name: any) {
    console.log('updateName === ', this.inputValue);
    this.dataFromParent['name'] = this.inputValue;
    console.log('clicked');
    this.modalController.dismiss(this.dataFromParent);
  }
}
