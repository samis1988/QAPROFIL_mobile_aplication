import { Component } from '@angular/core';
 
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';
/**
 * Generated class for the VedioqaprofilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vedioqaprofil',
  templateUrl: 'vedioqaprofil.html',
})
export class VedioqaprofilPage {

vid="https://www.youtube.com/embed/RE9aoErJGTk";
  constructor(public navCtrl: NavController, public navParams: NavParams, private dom: DomSanitizer, public platform: Platform) {
  
   let backAction =  platform.registerBackButtonAction(() => {
        console.log("vedioqaprofil");
        this.navCtrl.pop();
        backAction();
      },2)
  
  
  }
  sanitaze(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
  
 
  
  
  
  
  }
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad VedioqaprofilPage');
  }
  
  startApp(page) {
    this.navCtrl.setRoot(page, {}, {
      animate: true,
      direction: 'forward'
    });
  
}


}
