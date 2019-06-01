import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  title: string = "Welcome";
  active: string;
  lastRoot: string = "HomePage";

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

  }

  home(){
    this.navCtrl.setRoot("HomePage");
  }

  editRides(){
    this.navCtrl.push("EditRidesPage", {lastRoot: this.lastRoot});
  }

}
