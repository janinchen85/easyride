import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Trip } from '../../models/trip/trip.model';
import { Observable } from 'rxjs/Observable';
import { TripService } from '../../services/trip/trip.service';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  title: string = "Search";
  today: any = new Date();
  starting: string;
  destination: string;
  startdate: Date;
  trips: Observable<Trip[]>;
  lastRoot: string = "SearchPage";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private tripS: TripService ) {}

  searchTrip(){
    this.navCtrl.push("SearchResultPage", {
      starting: this.starting,
      destination: this.destination,
      startdate: this.startdate
    });
  }

  home(){
    this.navCtrl.setRoot("HomePage");
  }

  editRides(){
    this.navCtrl.push("EditRidesPage", {lastRoot: this.lastRoot});
  }

}
