import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRideRequestPage } from './add-ride-request';

@NgModule({
  declarations: [
    AddRideRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRideRequestPage),
  ],
})
export class AddRideRequestPageModule {}
