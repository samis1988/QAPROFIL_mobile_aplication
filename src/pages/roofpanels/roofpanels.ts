import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';

/**
 * Generated class for the RoofpanelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roofpanels',
  templateUrl: 'roofpanels.html',
})
export class RoofpanelsPage {

pages: any[] = [
    { title: 'Roof Sheet', component: 'RoofsheetPage',image: 'assets/img/qaprofil/roof_pannel/roof-sheet.png' },
    { title: 'Wave Roof', component: 'WaveroofPage',image: 'assets/img/qaprofil/roof_pannel/wave.png' },
    { title: 'ARC Roof', component: 'ArcroofPage' ,image: 'assets/img/qaprofil/roof_pannel/arc_roof.png'},
    
    { title: 'Ridge Cap', component: 'RidgecapPage',image: 'assets/img/qaprofil/roof_pannel/ridge_cap.png' },
    { title: 'Down Spout', component: 'DownspoutPage',image: 'assets/img/qaprofil/roof_pannel/downspot1.png' },
    { title: 'Water Gutter', component: 'WatergaterPage',image: 'assets/img/qaprofil/roof_pannel/water_gutter.bmp' }
     
     
  ]



   constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
  
    platform.registerBackButtonAction(() => {
      console.log("backPressed 1");
    },1);
  
  
  
  let backAction =  platform.registerBackButtonAction(() => {
        console.log("roofpanels");
        this.navCtrl.pop();
        backAction();
      },2)
  
  }
  
  
  
 goToSecond(page){
    this.navCtrl.push(page);
   
  }
    
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoofpanelsPage');
  }

}
