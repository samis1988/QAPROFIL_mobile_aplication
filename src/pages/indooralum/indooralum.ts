import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';

/**
 * Generated class for the IndooralumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-indooralum',
  templateUrl: 'indooralum.html',
})
export class IndooralumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
  
  
    platform.registerBackButtonAction(() => {
      console.log("backPressed 1");
    },1);
  
  
  
  let backAction =  platform.registerBackButtonAction(() => {
        console.log("gypsum");
        this.navCtrl.pop();
        backAction();
      },2)
  
  
  }
  
    pages: any[] = [
    { title: 'V Section', component: 'VsectionPage',image: 'assets/img/qaprofil/vsection.png' },
    { title: 'Qap Carrier', component: 'QapcarrierPage',image: 'assets/img/qaprofil/qap_carrier.png' },
    { title: 'Perimeter Angle', component: 'PerimeteranglePage' ,image: 'assets/img/qaprofil/p_a_alum.png'},
    
    { title: 'U Channel', component: 'UchannelPage',image: 'assets/img/qaprofil/u_channel.png' },
    { title: '84R and Joints Strips ', component: 'StripsjointPage',image: 'assets/img/qaprofil/84r/1.png' },
    { title: 'Qap 50 Strips', component: 'QapstripsPage',image: 'assets/img/qaprofil/qap50/1.png' },
    { title: 'Qap 100 - 200 Strips', component: 'QaponetwoPage',image: 'assets/img/qaprofil/qap100-200/1.png' },
     { title: 'T- Bar', component: 'TbarPage',image: 'assets/img/qaprofil/tbar/4.png' },
     { title: 'Semi-Round Panel', component: 'SemiroundPage',image: 'assets/img/qaprofil/bambo/1.jpg' },
     { title: 'Photo Gallery', component: 'GalleryalumPage',image: 'assets/img/qaprofil/gallery.png' }
     
    
     
  ]
  
  
   goToSecond(page){
    this.navCtrl.push(page);
   
  }
    
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndooralumPage');
  }

}
