import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
 import { ViewChild } from '@angular/core';
 import { ImageViewerController } from 'ionic-img-viewer';

/**
 * Generated class for the SlittingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slitting',
  templateUrl: 'slitting.html',
})
export class SlittingPage {

@ViewChild('mySlider') mySlider: any;
_imageViewerCtrl: ImageViewerController;
  constructor(public navCtrl: NavController, public navParams: NavParams, imageViewerCtrl: ImageViewerController, public platform: Platform) {
  this._imageViewerCtrl = imageViewerCtrl;
   let backAction =  platform.registerBackButtonAction(() => {
        console.log("slitting");
        this.navCtrl.pop();
        backAction();
      },2)
  
  }
  
  presentImage(myImage) {
   
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
    
   
    
    
  }
  
  elenco =  [
             {
               "img": "assets/img/qaprofil/slitting/1.jpg",
               "posicao": "",
               "nome": ""
               
             },
             {
               "img": "assets/img/qaprofil/slitting/2.jpg",
                 "posicao": "",
               "nome": ""
               
             },
             {
               "img": "assets/img/qaprofil/slitting/3.jpg",
               "posicao": "",
               "nome": ""
             },
             {
               "img": "assets/img/qaprofil/slitting/4.jpg",
              "posicao": "",
               "nome": ""
             } 
             ,
             {
               "img": "assets/img/qaprofil/slitting/5.jpg",
                "posicao": "",
               "nome": ""
             } 
           ]
           
           
           slideNext(){
       this.mySlider.slideNext();
     }
 
     slidePrev(){
       this.mySlider.slidePrev();
     }
  
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LintelPage');
  }
  
 

}
