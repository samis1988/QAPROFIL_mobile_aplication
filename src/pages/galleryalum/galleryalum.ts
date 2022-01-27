import { Component } from '@angular/core';
import { IonicPage, Platform} from 'ionic-angular';
import { NavController } from 'ionic-angular'
import { ImageViewerController } from 'ionic-img-viewer';
import { ViewChild } from '@angular/core';
/**
 * Generated class for the GalleryalumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galleryalum',
  templateUrl: 'galleryalum.html',
})
export class GalleryalumPage {

@ViewChild('mySlider') mySlider: any;
 _imageViewerCtrl: ImageViewerController;
 
  constructor(public navCtrl: NavController, imageViewerCtrl: ImageViewerController, platform: Platform) {
    this._imageViewerCtrl = imageViewerCtrl;
    
    
  let backAction =  platform.registerBackButtonAction(() => {
        console.log("contact");
        this.navCtrl.pop();
        backAction();
      },2)
    
    
  }
  
  
  elenco =  [
             {
               "img": "assets/img/qaprofil/full_image/84r-1.png",
              "posicao": "84R and Joints Strips ",
               "nome": "QA8 / QAJ"
               
             },
             {
               "img": "assets/img/qaprofil/full_image/84r-2.jpg",
                "posicao": "84R and Joints Strips ",
               "nome": "QA8 / QAJ"
             },
             {
               "img": "assets/img/qaprofil/full_image/84r-3.jpg",
              "posicao": "84R and Joints Strips ",
               "nome": "QA8 / QAJ"
             },
             {
              "img": "assets/img/qaprofil/full_image/84r-4.jpg",
         "posicao": "84R and Joints Strips ",
               "nome": "QA8 / QAJ"
             } 
             ,
             {
              "img": "assets/img/qaprofil/full_image/84r-5.jpg",
                "posicao": "84R and Joints Strips ",
               "nome": "QA8 / QAJ"
             } 
             ,
             {
              "img": "assets/img/qaprofil/full_image/84r-6.jpg",
              "posicao": "84R and Joints Strips ",
               "nome": "QA8 / QAJ"
             } 
             ///////////////// qap 50 **********************************************************************
              ,
             {
              "img": "assets/img/qaprofil/full_image/qap50-1.jpg",
             "posicao": "Qap 50 Strips",
               "nome": "QAQ50"
             }  ,
             {
              "img": "assets/img/qaprofil/full_image/qap50-2.jpg",
               "posicao": "Qap 50 Strips",
               "nome": "QAQ50"
             }  ,
             {
              "img": "assets/img/qaprofil/full_image/qap50-3.jpg",
               "posicao": "Qap 50 Strips",
               "nome": "QAQ50"
             }  ,
             {
              "img": "assets/img/qaprofil/full_image/qap50-4.jpg",
               "posicao": "Qap 50 Strips",
               "nome": "QAQ50"
             } 
             /////////*********** qap 100 ......................................................*********** 
             ,
             {
              "img": "assets/img/qaprofil/full_image/qap100-1.jpg",
              "posicao": "Qap 100 - 200 Strips",
               "nome": "Qap 100 - Qap 200"
             }  
             
             ,
             {
              "img": "assets/img/qaprofil/full_image/qap100-2.jpg",
              "posicao": "Qap 100 - 200 Strips",
               "nome": "Qap 100 - Qap 200"
             }  ,
             
              /////////*********** semi_round ......................................................*********** 
             
             {
              "img": "assets/img/qaprofil/full_image/semi_round-1.jpg",
               "posicao": "Semi-Round Panel",
               "nome": "QASRPR"
             }  ,
             {
              "img": "assets/img/qaprofil/full_image/semi_round-2.jpg",
              "posicao": "Semi-Round Panel",
               "nome": "QASRPR"
             } 
              ,
             
              /////////*********** t bar ......................................................*********** 
             
             {
              "img": "assets/img/qaprofil/full_image/tbar-1.jpg",
               "posicao": "Semi-Round Panel",
               "nome": "QASRPR"
             }  ,
             {
              "img": "assets/img/qaprofil/full_image/tbar-2.jpg",
              "posicao": "Semi-Round Panel",
               "nome": "QASRPR"
             } 
             
             
           ]
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
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
    console.log('ionViewDidLoad GalleryalumPage');
  }
  
 
  

}
