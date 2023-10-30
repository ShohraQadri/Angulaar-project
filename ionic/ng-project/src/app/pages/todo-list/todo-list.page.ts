import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {

  constructor(private toastController: ToastController, private navCtrl: NavController) { }

  ngOnInit() {
  }
  inputValue: string = '';
  list: any[] = [];
  // isEdit: any = false;
  inputName: any;
  async myfun() {
    if (this.inputValue == '' || this.inputValue == undefined) {
      const toast = await this.toastController.create({
        message: 'please fill the input field!',
        duration: 1500,
        position: 'bottom',
      });

      await toast.present();
      return;
    }
    this.list.push({ id: this.list.length, name: this.inputValue });
    console.log(this.list)
  }
  removebutton(id: number) {
    console.warn(id)
    this.list = this.list.filter(inputValue => inputValue.id !== id)
  }
  editbutton(value: any, name: any) {
    console.log(this.list);
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     special: JSON.stringify({})
    //   }
    // };
    this.navCtrl.navigateForward('/todo-list/update-todo', {
      queryParams: { value, name }
    });
    // this.isEdit = true;
    // const found = list.find((value) => element > 10);
    // this.inputName = name;
    // console.log("inputValue === ", value);
    // console.warn('hii')
  }
}
