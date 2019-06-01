import { ToastService } from '../../services/toast/toast.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Trip } from '../../models/trip/trip.model';
import { TripService } from '../../services/trip/trip.service';

@IonicPage()
@Component({
  selector: 'page-edit-ride',
  templateUrl: 'edit-ride.html',
})
export class EditRidePage {

  title: string = "Edit Ride";
  trip: Trip;
  lastRoot: string = "EditRidePage";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private tripS: TripService,
              private toast: ToastService ) {
  }

  ionViewWillLoad() {
   this.trip = this.navParams.get('trip');
  }

  editTrip(trip: Trip){
      this.tripS.editTrip(trip).then(() => {
        this.toast.show(`Your ride has been successfully edited`);
        this.navCtrl.setRoot('EditRidesPage');
      });
  }

  home(){
    this.navCtrl.setRoot("HomePage");
  }

  editRides(){
    this.navCtrl.push("EditRidesPage", {lastRoot: this.lastRoot});
  }

}
