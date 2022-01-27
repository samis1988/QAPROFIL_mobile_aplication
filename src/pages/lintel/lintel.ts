import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform, ToastController } from 'ionic-angular';
 import { ViewChild } from '@angular/core';
 import { ImageViewerController } from 'ionic-img-viewer';
 import { UserserviceProvider, User } from '../../providers/userservice/userservice';
 import { OrderserviceProvider, Cart } from '../../providers/orderservice/orderservice';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the LintelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lintel',
  templateUrl: 'lintel.html',
})
export class LintelPage {
 @ViewChild('mySlider') mySlider: any;
_imageViewerCtrl: ImageViewerController;
 colors: any[] = [];
  widths: any[] = [];
  thinkness: any[] = [];
  quantity:number=1;
  color: any;
  width: any;
  thicknes: any;
  baseURL: string;
  res: any;
  product1 = false;
  product2 = false;
  isValid = false;
  title = "lintel";
  p1 = "";
  cart: Cart;
  orders: Cart[] = []; 
  constructor(public navCtrl: NavController, public navParams: NavParams, imageViewerCtrl: ImageViewerController, public platform: Platform, public userservice: UserserviceProvider, public orderservice: OrderserviceProvider, public http: HttpClient, public toastController: ToastController) {
  this._imageViewerCtrl = imageViewerCtrl;
  this.baseURL = this.userservice.baseURL;
   let backAction =  platform.registerBackButtonAction(() => {
        console.log("lintel");
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
               "img": "assets/img/qaprofil/lintel/1.png",
               "posicao": "Lintel",
               "nome": "QSGLNTL"
               
             },
             {
               "img": "assets/img/qaprofil/lintel/2.png",
                "posicao": "Lintel",
               "nome": "QSGLNTL"
               
             },
             {
               "img": "assets/img/qaprofil/lintel/3.png",
               "posicao": "Lintel",
               "nome": "QSGLNTL"
             },
             {
               "img": "assets/img/qaprofil/lintel/4.bmp",
               "posicao": "Lintel",
               "nome": "QSGLNTL"
             } 
           ]
           
           
           slideNext(){
       this.mySlider.slideNext();
     }
 
     slidePrev(){
       this.mySlider.slidePrev();
     }
  
  
  

  ionViewDidLoad() {
    let request = `${this.baseURL}/product/${this.title}`;
    console.log(request);
    this.http.get(`${this.baseURL}/product/${this.title}`, { observe: 'response' }).subscribe(data => {

      if (data.status == 200)
      this.res = data.body;
      console.log(this.res);
      this.colors = this.res.colors;
      this.widths = this.res.widths;
      this.thinkness = this.res.thinkness;
      if(this.colors.length != 0){
         this.isValid = true;}

    }, (error) => {
      console.log(error);
    });
  }
  
    startApp(page) {
     this.navCtrl.setRoot(page, {}, {
      animate: true,
      direction: 'forward'
     });
    }
     goToSecond(page) {
      this.navCtrl.push(page);
    }
  
    
    addToCart() {
        if (this.color == null || this.width == null || this.thicknes == null || this.quantity== null || this.quantity < 1) {
          this.sendNotification("Please choose the characteristics of the product");
        }
        else {
              let data: Cart = {
                product: this.title,
                color: this.color,
                width: this.width,
                thickness: this.thicknes,
                image:"assets/img/qaprofil/lintel/1.png",
                quantity: this.quantity,
              };
              this.orderservice.setOrder(data);
         
          this.sendNotification('Product added to the cart');
        }
    
  
    }
  
    sendNotification(message: string): void {
      let notification = this.toastController.create({
        message: message,
        duration: 3000
      });
      notification.present();
    }

}
