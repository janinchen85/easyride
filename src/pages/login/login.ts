import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  title: string = "EasyRide";

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  logIn(){
    this.navCtrl.setRoot("HomePage");
  }
}
