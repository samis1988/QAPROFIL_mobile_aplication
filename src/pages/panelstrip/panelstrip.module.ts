import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PanelstripPage } from './panelstrip';

@NgModule({
  declarations: [
    PanelstripPage,
  ],
  imports: [
    IonicPageModule.forChild(PanelstripPage),
  ],
})
export class PanelstripPageModule {}
