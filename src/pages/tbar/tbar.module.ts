import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TbarPage } from './tbar';

@NgModule({
  declarations: [
    TbarPage,
  ],
  imports: [
    IonicPageModule.forChild(TbarPage),
  ],
})
export class TbarPageModule {}
