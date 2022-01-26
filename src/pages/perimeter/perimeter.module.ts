import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerimeterPage } from './perimeter';

@NgModule({
  declarations: [
    PerimeterPage,
  ],
  imports: [
    IonicPageModule.forChild(PerimeterPage),
  ],
})
export class PerimeterPageModule {}
