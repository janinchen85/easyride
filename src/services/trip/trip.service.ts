
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from "@angular/core";
import { Trip } from '../../models/trip/trip.model';


@Injectable()
export class TripService {

  private tripPath: string = '/trip';
  public tripRef;
  public tripDest;
  username: string = 'Janinchen85';

  constructor(private db: AngularFireDatabase){}

  searchTrip(starting, destination, startdate) {
    if(starting != null && destination != null && startdate != null ) {
      this.tripRef = this.db.list(this.tripPath, ref =>
        ref.orderByChild('startdate').equalTo(startdate)
        .ref.orderByChild('starting').equalTo(starting)
        .ref.orderByChild('destination').equalTo(destination))
        .snapshotChanges()
        .map(changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val(),
          }));
        });
      } else if (starting != null){
        this.tripRef = this.db.list(this.tripPath, ref =>
          ref.orderByChild('starting').equalTo(starting))
          .snapshotChanges()
          .map(changes => {
            return changes.map(c => ({
              key: c.payload.key,
              ...c.payload.val(),
            }));
          });
      } else if (destination != null){
        this.tripRef = this.db.list(this.tripPath, ref =>
          ref.orderByChild('destination').equalTo(destination))
          .snapshotChanges()
          .map(changes => {
            return changes.map(c => ({
              key: c.payload.key,
              ...c.payload.val(),
            }));
          });
      } else if (startdate != null){
        this.tripRef = this.db.list(this.tripPath, ref =>
          ref.orderByChild('startdate').equalTo(startdate))
          .snapshotChanges()
          .map(changes => {
            return changes.map(c => ({
              key: c.payload.key,
              ...c.payload.val(),
            }));
          });
      } else {
        this.tripRef = this.db.list(this.tripPath)
          .snapshotChanges()
          .map(changes => {
            return changes.map(c => ({
              key: c.payload.key,
              ...c.payload.val(),
            }));
          });
      }
    return this.tripRef;
  }

  getMyTrips(){
    this.tripRef = this.db.list(this.tripPath, ref =>
      ref.orderByChild('username').equalTo(this.username))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });
      return this.tripRef;
  }

  addTrip(trip: Trip){
    this.tripRef = this.db.list(this.tripPath);
    return this.tripRef.push(trip);
  }

  editTrip(trip: Trip){
    this.tripRef = this.db.list(this.tripPath);
    return this.tripRef.update(trip.key, trip);
  }

  deleteTrip(trip: Trip){
    this.tripRef = this.db.list(this.tripPath);
    return this.tripRef.remove(trip.key);
}

}
