import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditRidesPage } from './edit-rides';

@NgModule({
  declarations: [
    EditRidesPage,
  ],
  imports: [
    IonicPageModule.forChild(EditRidesPage),
  ],
})
export class EditRidesPageModule {}
