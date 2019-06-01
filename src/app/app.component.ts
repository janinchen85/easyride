import { Component } from '@angular/core';
import { Platform, NavController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: string;
  loader: any;

  constructor(public platform: Platform,
              public loadingCtrl: LoadingController,
              public storage: Storage) {

                this.presentLoading();
    //this.storage.set('introShown', false); // delete this
    this.platform.ready().then(() => {
      this.storage.get('introShown').then((result) => {
        if(result){
          this.rootPage = 'HomePage';
        } else {
          this.rootPage = 'IntroPage';
          this.storage.set('introShown', true);  // set to true
        }
        this.loader.dismiss();
      });
    });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Initialize..."
    });
    this.loader.present();
  }


}
