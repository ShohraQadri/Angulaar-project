import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.page.html',
  styleUrls: ['./update-todo.page.scss'],
})
export class UpdateTodoPage implements OnInit {

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log("params === ", params);
    });
  }

  ngOnInit() {
  }

}
