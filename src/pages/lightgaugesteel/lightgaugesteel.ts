import { Component } from '@angular/core';
import { IonicPage, Platform} from 'ionic-angular';
import { NavController } from 'ionic-angular'
import { ImageViewerController } from 'ionic-img-viewer';
import { ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the LightgaugesteelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lightgaugesteel',
  templateUrl: 'lightgaugesteel.html',
})
export class LightgaugesteelPage {
vid="https://www.youtube.com/embed/AYFBtgQ6KBM";
@ViewChild('mySlider') mySlider: any;
 _imageViewerCtrl: ImageViewerController;
 
 
 
 

 
 
 
 
 
 
 
  constructor(public navCtrl: NavController, imageViewerCtrl: ImageViewerController, platform: Platform, private dom:DomSanitizer) {
    this._imageViewerCtrl = imageViewerCtrl;
    
    
  let backAction =  platform.registerBackButtonAction(() => {
        console.log("contact");
        this.navCtrl.pop();
        backAction();
      },2)
    
    
  }
  
  
  
  
  
  
  elenco =  [
             {
               "img": "assets/img/qaprofil/portacabin/1.jpg",
              "posicao": "",
               "nome": ""
               
             },
             {
               "img": "assets/img/qaprofil/portacabin/2.png",
                "posicao": "",
               "nome": ""
             },
             {
               "img": "assets/img/qaprofil/portacabin/3.png",
              "posicao": "",
               "nome": ""
             },
             {
              "img": "assets/img/qaprofil/portacabin/4.png",
         "posicao": "",
               "nome": ""
             } 
             
             
           ]
  
  
  
  
  
  
  
    sanitaze(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }
  


    slideNext(){
       this.mySlider.slideNext();
     }
 
     slidePrev(){
       this.mySlider.slidePrev();
     }



  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LightgaugesteelPage');
  }

}
