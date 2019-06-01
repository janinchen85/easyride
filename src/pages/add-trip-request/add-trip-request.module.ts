import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTripRequestPage } from './add-trip-request';


@NgModule({
  declarations: [
    AddTripRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTripRequestPage),
  ],
})
export class AddTripRequestPageModule {}
