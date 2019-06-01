import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  @ViewChild(Slides) slides: Slides;

  goToSlide(page) {
    this.slides.slideTo(page, 500);
  }

  goBack() {
    this.slides.slidePrev(500);
  }

  goNext() {
    this.slides.slideNext(500);
  }

}
