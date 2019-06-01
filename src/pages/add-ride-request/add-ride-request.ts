import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Trip } from '../../models/trip/trip.model';
import { TripService } from '../../services/trip/trip.service';
import { ToastService } from '../../services/toast/toast.service';


@IonicPage()
@Component({
  selector: 'page-add-ride-request',
  templateUrl: 'add-ride-request.html',
})
export class AddRideRequestPage {
  [x: string]: any;

  today: any = new Date();
  title: string = "Add ride request";

  regulary = [false, true];
  days = ["Mo", "Mo/Di", "Mo/Di/Mi", "Mo/Di/Mi/Do", "Mo/Di/Mi/Do/Fr", "Mo/Mi/Fr", "Sa/So"];
  price = [5, 10, 15, 20, 25, 30];
  persons = [1,2,3,4];
  gender = ["female", "male", "all"];
  smoking = ["yes", "no", "E-Cigarette"];
  lastRoot: string = "EditRidePage";


  trip: Trip = {
    starting: '',
    destination: '',
    startdate: undefined,
    starttime: undefined,
    create_date: this.today,
    regulary: this.regulary[Math.floor(Math.random() * this.regulary.length)],
    days: this.days[Math.floor(Math.random() * this.days.length)],
    price: this.price[Math.floor(Math.random() * this.price.length)],
    persons: this.persons[Math.floor(Math.random() * this.persons.length)],
    gender: this.gender[Math.floor(Math.random() * this.gender.length)],
    smoking: this.smoking[Math.floor(Math.random() * this.smoking.length)],
    username: 'Janinchen85',
  }


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private tripS: TripService,
              private toast: ToastService) {
  }

  addTrip(trip: Trip){
    this.tripS.addTrip(trip).then(ref => {
      this.toast.show(`Added your new riderequest!`);
      this.navCtrl.setRoot('HomePage', { key: ref.key })
    })
  }

  home(){
    this.navCtrl.setRoot("HomePage");
  }

  editRides(){
    this.navCtrl.push("EditRidesPage", {lastRoot: this.lastRoot});
  }

}
