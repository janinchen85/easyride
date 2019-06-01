import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { Trip } from '../../models/trip/trip.model';
import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-add-trip-request',
  templateUrl: 'add-trip-request.html',
})
export class AddTripRequestPage {


  constructor(public navCtrl: NavController,
              public navParams: NavParams,) {
  }

  /*
  addTrip(trip: Trip){
    this.tripS.addTrip(trip).then(ref => {
      //this.toast.show(`${product.name} added!`);
      //console.log(ref.key);
      this.navCtrl.push('SearchResultPage')
    })
  }
*/
}
