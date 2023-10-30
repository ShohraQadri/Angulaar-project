import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      console.log('params === ', params, params['name']);
      this.inputValue = params['name'];
    });
  }

  ngOnInit() {}

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
    console.log(this.list);
  }
  removebutton(id: number) {
    console.warn(id);
    this.list = this.list.filter((inputValue) => inputValue.id !== id);
  }
  editbutton(value: any, name: any) {
    console.log(this.list);

    this.navCtrl.navigateForward('/todo-list/update-todo', {
      queryParams: { value, name },
    });
  }
  update(name: any) {
    // console.log(name);
    this.updateName = name;
    console.log('updateName === ', this.updateName);
    // this.inputValue[this.]
    console.log('clicked');
    this.router.navigate(['/todo-list', { name: this.updateName }]);
  }
}
