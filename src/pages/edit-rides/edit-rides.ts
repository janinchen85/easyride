import { ToastService } from './../../services/toast/toast.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TripService } from '../../services/trip/trip.service';
import { Observable } from 'rxjs/Observable';
import { Trip } from '../../models/trip/trip.model';

@IonicPage()
@Component({
  selector: 'page-edit-rides',
  templateUrl: 'edit-rides.html',
})
export class EditRidesPage {

  title: string = "Rides Control";
  trips: Observable<Trip[]>;
  starting: string;
  destination: string;
  startdate: Date;
  lastRoot: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private tripS: TripService,
              public viewCtrl: ViewController,
              private toast: ToastService) {

              this.trips = this.tripS.getMyTrips();
              this.lastRoot = this.navParams.get('lastRoot');
  }

  deleteRide(trip: Trip){
    this.tripS.deleteTrip(trip).then(() => {
      this.toast.show(`This ride has been successfull deleted!`);
      this.navCtrl.setRoot('EditRidesPage');
    })
  }

  home(){
    this.navCtrl.setRoot("HomePage");
  }

  editRides(){
    this.navCtrl.popTo(this.lastRoot);
  }

}
