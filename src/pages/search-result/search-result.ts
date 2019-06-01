import { TripService } from './../../services/trip/trip.service';
import { IonicPage, NavParams,  NavController} from 'ionic-angular';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Trip } from '../../models/trip/trip.model';

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {

  title: string = "Search Result";
  trips: Observable<Trip[]>;
  starting: string;
  destination: string;
  startdate: Date;
  lastRoot: string = "SearchResultPage";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private tripS: TripService) {

    this.starting = this.navParams.get('starting');
    this.destination = this.navParams.get('destination');
    this.startdate = this.navParams.get('startdate');
    this.trips = this.tripS.searchTrip(this.starting, this.destination, this.startdate);
  }

  home(){
    this.navCtrl.setRoot("HomePage");
  }

  editRides(){
    this.navCtrl.push("EditRidesPage", {lastRoot: this.lastRoot});
  }


}
