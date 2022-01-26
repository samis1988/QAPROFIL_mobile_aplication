import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QapstripsPage } from './qapstrips';

@NgModule({
  declarations: [
    QapstripsPage,
  ],
  imports: [
    IonicPageModule.forChild(QapstripsPage),
  ],
})
export class QapstripsPageModule {}
