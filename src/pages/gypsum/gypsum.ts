import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';

/**
 * Generated class for the GypsumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gypsum',
  templateUrl: 'gypsum.html',
})
export class GypsumPage {

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
    { title: 'Perimeter Angle', component: 'PerimeterPage',image: 'assets/img/qaprofil/perimeterangle.png' },
    { title: 'Furring Channel', component: 'FurringChannelPage',image: 'assets/img/qaprofil/furring_channel.png' },
    { title: 'Main Channel', component: 'MainchannelPage' ,image: 'assets/img/qaprofil/main.png'},
    
    { title: 'Angle Bead', component: 'AnglebeadPage',image: 'assets/img/qaprofil/angle.png' },
    
    { title: 'Runner', component: 'RunnerPage',image: 'assets/img/qaprofil/runner.png' },
    { title: 'J-Trim', component: 'JtrimPage',image: 'assets/img/qaprofil/jtrim.png' },
     { title: 'Stud', component: 'StudlesPage',image: 'assets/img/qaprofil/stud_les.png' }
     
    
     
  ]
  
  
  
   goToSecond(page){
    this.navCtrl.push(page);
   
  }
    
  
  
  
  
  
  
  
  
  
   startApp(page) {
    this.navCtrl.setRoot(page, {}, {
      animate: true,
      direction: 'forward'
    });
  
}


 
 
  





  ionViewDidLoad() {
    console.log('ionViewDidLoad GypsumPage');
  }

}
